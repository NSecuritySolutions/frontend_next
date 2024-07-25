import CalculatorBlockStore from '@/shared/components/CalculatorCard/store'

import { makeAutoObservable, computed, observable, action } from 'mobx'
import { IBlock, ICalculatorData, IPriceList, IPriceVariables, TProduct } from './types'

class CalculatorStore {
  data: IBlock[] = []
  priceList: IPriceList | undefined = undefined
  prices: IPriceVariables = {}
  products: TProduct[] = []
  blocks: CalculatorBlockStore[] = []
  error: null | unknown = null
  animationSafe: boolean = true
  constructor() {
    makeAutoObservable(this, {
      blocks: observable,
      animationSafe: observable,
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

  setProduct(product: TProduct) {
    this.blocks.map((block) => {
      block.setProduct(product)
    })
  }
}

const calculatorStore = new CalculatorStore()
export default calculatorStore
