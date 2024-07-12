import CalculatorBlockStore from '@/shared/components/CalculatorCard/store'

import { makeAutoObservable, computed, observable } from 'mobx'
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

  constructor() {
    makeAutoObservable(this, {
      blocks: observable,
      result: computed,
      data: observable.ref,
      prices: observable.ref,
      products: observable.ref,
    })
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
}

const calculatorStore = new CalculatorStore()
export default calculatorStore
