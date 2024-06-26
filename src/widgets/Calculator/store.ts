import CalculatorBlockStore from '@/shared/components/CalculatorCard/store'

import { makeAutoObservable, computed, observable } from 'mobx'
import { IBlock, ICalculatorData, ICamera, IPriceList, IRegister } from './types'

class CalculatorStore {
  data: IBlock[] = []
  // @TODO Не забыть переделать модель цен на бэке!!!!
  prices: IPriceList | undefined = undefined
  products: (ICamera | IRegister)[] = []
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
    const formatedSum = sum.toLocaleString('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    return formatedSum
  }

  setBlocks() {
    this.blocks = this.data.map((blockData) => new CalculatorBlockStore(blockData, this.prices!))
  }

  setNewBlock(id: number) {
    this.blocks.push(
      new CalculatorBlockStore(this.data.filter((block) => block.id == id)[0], this.prices!),
    )
  }

  removeBlock(id: number) {
    this.blocks.splice(id, 1)
  }

  getData(products: (ICamera | IRegister)[], calculator: ICalculatorData[]) {
    if (!products || !calculator) {
      this.error = true
      return
    }
    this.products = products
    this.data = calculator[0].blocks
    this.prices = calculator[0].price_list
    if (this.data && this.prices) {
      this.setBlocks()
    }
  }
}

const calculatorStore = new CalculatorStore()
export default calculatorStore
