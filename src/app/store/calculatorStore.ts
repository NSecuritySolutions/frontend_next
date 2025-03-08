import CalculatorBlockStore from './calculatorBlockStore'

import { makeAutoObservable, computed, observable, action } from 'mobx'
import { IBlock, ICalculatorData, IProduct } from '@/widgets/Calculator/types'
import { IEquipment } from '@/widgets/ReadySolutionSection/types'
import { CalculatorData } from '@/shared/components/FormModal/types'

export class CalculatorStore {
  data: IBlock[] = []
  products: IProduct[] = []
  price_list?: string
  blocks: CalculatorBlockStore[] = []
  error: null | unknown = null
  animationSafe: boolean = true
  pending_products: { product: IProduct; amount: number }[] = []
  suitable_blocks: string[] = []
  selected_blocks: string[] = []
  constructor() {
    makeAutoObservable(this, {
      blocks: observable,
      animationSafe: observable,
      pending_products: observable,
      suitable_blocks: observable,
      clearable: computed,
      result: computed,
      setAnimationSafe: action,
      data: observable.ref,
      products: observable.ref,
      price_list: observable.ref,
    })
  }

  setAnimationSafe = (value: boolean) => {
    this.animationSafe = value
  }

  get changed() {
    return this.blocks.some((block) => block.changed)
  }

  get clearable() {
    if (this.blocks.length !== this.data.length) return true
    if (this.blocks.find((block) => block.changed)) return true
    return false
  }

  get result() {
    const sum = this.blocks.reduce((sum, block) => {
      return sum + block.result
    }, 0)
    return sum
  }

  setBlocks() {
    this.blocks = this.data.map((blockData) => new CalculatorBlockStore(blockData))
  }

  setNewBlock(id: number) {
    this.blocks.push(new CalculatorBlockStore(this.data.filter((block) => block.id == id)[0]))
  }

  removeBlock(id: number) {
    this.blocks.splice(id, 1)
  }

  getData(products: IProduct[], calculator: ICalculatorData[]) {
    if (!products || !calculator) {
      console.error('Important data is undefined')
      this.error = true
      return
    }
    if (!calculator.length) {
      console.error('Calculators empty list')
      this.error = true
    } else {
      this.products = products
      this.data = calculator[0].blocks
      this.price_list = calculator[0].price_list
      if (this.data) {
        this.setBlocks()
      }
    }
  }

  handleBlockClick(blockId: string) {
    const index = this.selected_blocks.findIndex((block) => block === blockId)
    if (index >= 0) this.selected_blocks.splice(index)
    else this.selected_blocks.push(blockId)
  }

  handleCancelSelectBlocks() {
    this.pending_products = []
    this.suitable_blocks = []
    this.selected_blocks = []
  }

  handleConfirmSelectBlocks() {
    this.pending_products.forEach((product) =>
      this.setBlockProduct(product.product, product.amount, this.selected_blocks),
    )
    this.handleCancelSelectBlocks()
  }

  setProduct(product: IProduct) {
    if (this.animationSafe) {
      const suitable_blocks: string[] = []
      this.blocks.forEach((block) => {
        if (block.checkProductForCurrentBlock(product)) suitable_blocks.push(block.id)
      })
      if (suitable_blocks.length > 1) {
        this.pending_products.push({ product: product, amount: 1 })
        this.suitable_blocks = suitable_blocks
      } else {
        this.blocks.forEach((block) => {
          if (suitable_blocks.includes(block.id)) block.setProduct(product, 1)
        })
      }
    }
  }

  setBlockProduct(product: IProduct, amount: number, blockIds: string[]) {
    this.blocks.forEach((block) => {
      if (blockIds.includes(block.id)) block.setProduct(product, amount)
    })
  }

  setProducts(products: IEquipment[], resetAll?: boolean) {
    if (this.animationSafe) {
      const blocks: Set<CalculatorBlockStore> = new Set()
      products.forEach((product) => {
        this.blocks.forEach((block) => {
          if (block.backend_id == product.calculator_block) {
            blocks.add(block)
          }
        })
      })
      if (resetAll) blocks.forEach((v) => v.prepareForProductInsert())
      blocks.forEach((v) => v.resetCalculationProducts())
      products.forEach((product) => {
        this.blocks
          .filter((block) => block.backend_id == product.calculator_block)
          .map((block) => {
            block.setProduct(product.product, product.amount)
          })
      })
      if (resetAll) blocks.forEach((v) => v.finishProductInsert())
    }
  }

  createFormData() {
    const blocks = this.blocks
      .filter((block) => block.changed)
      .map((block) => block.createFormData())
    if (blocks?.length) {
      const data: CalculatorData = {
        price: this.result,
        blocks: blocks,
      }
      return data
    }
  }
}

const calculatorStore = new CalculatorStore()
export default calculatorStore
