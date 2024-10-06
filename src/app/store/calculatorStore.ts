import CalculatorBlockStore from './calculatorBlockStore'

import { makeAutoObservable, computed, observable, action } from 'mobx'
import {
  IBlock,
  ICalculatorData,
  IPriceList,
  IPriceVariables,
  TProduct,
} from '@/widgets/Calculator/types'
import { IEquipment } from '@/widgets/ReadySolutionSection/types'
import { CalculatorData } from '@/shared/components/FormModal/types'

export class CalculatorStore {
  data: IBlock[] = []
  priceList: IPriceList | undefined = undefined
  prices: IPriceVariables = {}
  products: TProduct[] = []
  blocks: CalculatorBlockStore[] = []
  error: null | unknown = null
  animationSafe: boolean = true
  pending_products: { product: TProduct; amount: number }[] = []
  suitable_blocks: string[] = []
  selected_blocks: string[] = []
  constructor() {
    makeAutoObservable(this, {
      blocks: observable,
      animationSafe: observable,
      // pending_products: observable,
      // suitable_blocks: observable,
      clearable: computed,
      result: computed,
      setAnimationSafe: action,
      data: observable.ref,
      prices: observable.ref,
      products: observable.ref,
    })
  }

  setAnimationSafe = (value: boolean) => {
    this.animationSafe = value
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
    this.blocks = this.data.map((blockData) => new CalculatorBlockStore(blockData, this.prices))
  }

  setNewBlock(id: number) {
    this.blocks.push(
      new CalculatorBlockStore(this.data.filter((block) => block.id == id)[0], this.prices),
    )
  }

  removeBlock(id: number) {
    this.blocks.splice(id, 1)
  }

  formPrices() {
    this.priceList!.categories.map((category) =>
      category.prices.map((price) => (this.prices[price.variable_name] = price.price)),
    )
  }

  getData(products: TProduct[], calculator: ICalculatorData[]) {
    if (!products || !calculator) {
      this.error = true
      return
    }
    this.products = products
    this.data = calculator[0].blocks
    this.priceList = calculator[0].price_list
    this.formPrices()
    if (this.data && this.prices) {
      this.setBlocks()
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

  setProduct(product: TProduct) {
    if (this.animationSafe) {
      const suitable_blocks: string[] = []
      this.blocks.forEach((block) => {
        if (block.checkProductForCurrentBlock(product)) suitable_blocks.push(block.id)
      })
      if (suitable_blocks.length > 1) {
        console.log('here')
        this.pending_products.push({ product: product, amount: 1 })
        this.suitable_blocks = suitable_blocks
      } else {
        this.blocks.forEach((block) => {
          if (suitable_blocks.includes(block.id)) block.setProduct(product, 1)
        })
      }
    }
  }

  setBlockProduct(product: TProduct, amount: number, blockIds: string[]) {
    this.blocks.forEach((block) => {
      if (blockIds.includes(block.id)) block.setProduct(product, amount)
    })
  }

  setProducts(products: IEquipment[]) {
    if (this.animationSafe) {
      products.forEach((product) => {
        this.blocks
          .filter((block) => block.backend_id == product.calculator_block)
          .map((block) => {
            block.setProduct(product.product, product.amount)
          })
      })
    }
  }

  createFormData() {
    const data: CalculatorData = {
      price: this.result,
      blocks: this.blocks.map((block) => block.createFormData()),
    }
    return data
  }
}

const calculatorStore = new CalculatorStore()
export default calculatorStore
