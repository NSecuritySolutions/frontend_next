import { TProduct } from '@/widgets/Calculator/types'
import { ISolution } from '@/widgets/ReadySolutionSection/types'
import { makeAutoObservable, observable, action } from 'mobx'

export class FormModalStore {
  isOpen: boolean = false
  data: ISolution | null = null
  calculator: boolean = false
  constructor() {
    makeAutoObservable(this, {
      isOpen: observable,
      data: observable,
      calculator: observable,
      open: action,
      openSolution: action,
      openCalc: action,
      close: action,
    })
  }

  open() {
    this.isOpen = true
  }

  openSolution(data: ISolution) {
    this.data = data
    this.isOpen = true
  }

  openCalc() {
    this.calculator = true
    this.isOpen = true
  }

  close() {
    this.isOpen = false
    this.data = null
    this.calculator = false
  }
}

// const formModal = new FormModalStore()
// export default formModal
