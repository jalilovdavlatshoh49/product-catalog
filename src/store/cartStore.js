import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),
  getters: {
    totalItems: state => state.items.reduce((sum, i) => sum + i.qty, 0),
    totalPrice: state => state.items.reduce((sum, i) => sum + i.qty * i.product.price, 0),
  },
  actions: {
    add(product) {
      const existing = this.items.find(i => i.product.id === product.id)
      if (existing) {
        existing.qty++
      } else {
        this.items.push({ product, qty: 1 })
      }
    },
    remove(productId) {
      this.items = this.items.filter(i => i.product.id !== productId)
    },
    clear() {
      this.items = []
    },
  },
})
