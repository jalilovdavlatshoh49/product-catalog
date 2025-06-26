import { defineStore } from 'pinia'
import { fetchProducts } from '../services/productService'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    filtered: [],
  }),
  actions: {
    async loadProducts() {
      try {
        this.products = await fetchProducts()
        this.filtered = this.products
      } catch (error) {
        console.error("❌ Error loading products:", error)
      }
    },
    filterBy({ price, brand, category }) {
      this.filtered = this.products.filter(p => {
        return (
          (!price || p.price <= price) &&
          (!brand || p.brand === brand) &&
          (!category || p.category === category)
        )
      })
    },
  },
})
