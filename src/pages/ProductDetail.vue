<template>
  <div class="container mx-auto p-6" v-if="product">
    <div class="flex flex-col md:flex-row gap-8">
      <img
        :src="product.image"
        :alt="product.title"
        class="w-full md:w-1/3 h-64 object-contain bg-white"
      />
      <div>
        <h2 class="text-2xl font-bold mb-4">{{ product.title }}</h2>
        <p class="mb-4">{{ product.description }}</p>
        <p class="text-xl font-bold mb-6">{{ product.price }} $</p>
        <button
          class="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          @click="addToCart"
        >
          Ба сабад
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed, onMounted } from 'vue'
import { useProductStore } from '../store/productStore'
import { useCartStore } from '../store/cartStore'

const route = useRoute()
const productStore = useProductStore()
const cartStore = useCartStore()

const id = parseInt(route.params.id)
const product = computed(() => productStore.products.find(p => p.id === id))

onMounted(async () => {
  if (!productStore.products.length) {
    await productStore.loadProducts()
  }
})

const addToCart = () => {
  cartStore.add(product.value)
}
</script>
