import { BASE_URL } from '@/shared/constants/url/url'
import axios from 'axios'
import { makeAutoObservable, action, computed, observable } from 'mobx'

class Store {
  data = null

  constructor() {
    makeAutoObservable(this, {
      data: observable,
    })
    this.fetchData()
  }
  fetchData() {
    axios.get(`${BASE_URL}/api/v1/our-service/`, { timeout: 10000 }).then(
      action('fetchProducts', (response) => {
        this.data = response.data
        console.log(response.data, 'data')
      }),
    )
  }
}

const dataFetch = new Store()
export default dataFetch
