import CalculatorBlockStore from '@/shared/components/CalculatorCard/store'

import { makeAutoObservable, computed, observable, action } from 'mobx'
import {
  IBlock,
  ICalculatorData,
  ICamera,
  IPriceList,
  IRegister,
  IHDD,
  IFACP,
  ISensor,
  IPACSProduct,
  IPriceVariables,
} from './types'

class CalculatorStore {
  data: IBlock[] = []
  priceList: IPriceList | undefined = undefined
  prices: IPriceVariables = {}
  products: (ICamera | IRegister | IHDD | IFACP | ISensor | IPACSProduct)[] = []
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

  getData(
    products: (ICamera | IRegister | IHDD | IFACP | ISensor | IPACSProduct)[],
    calculator: ICalculatorData[],
  ) {
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

  setProduct(product: ICamera | IRegister | IHDD | IFACP | ISensor | IPACSProduct) {
    this.blocks.map((block) => {
      if (Object.keys(block.products).find((item) => item == product.category.title)) {
        block.products[product.category.title].push(product)
      }
    })
  }
}

const calculatorStore = new CalculatorStore()
export default calculatorStore
