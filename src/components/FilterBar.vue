<template>
  <div class="p-4 bg-gray-100 rounded-lg mb-6">
    <div class="flex flex-wrap gap-4">
      <input
        type="number"
        v-model.number="price"
        placeholder="Макс. нарх"
        class="border rounded px-2 py-1"
      />
      <select v-model="brand" class="border rounded px-2 py-1">
        <option value="">Бренд</option>
        <option v-for="b in brands" :key="b">{{ b }}</option>
      </select>
      <select v-model="category" class="border rounded px-2 py-1">
        <option value="">Категория</option>
        <option v-for="c in categories" :key="c">{{ c }}</option>
      </select>
      <button
        @click="apply"
        class="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
      >
        Филтр
      </button>
      <button
        @click="reset"
        class="bg-gray-300 text-gray-800 px-4 py-1 rounded hover:bg-gray-400"
      >
        Тоза
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useProductStore } from '../store/productStore'

const store = useProductStore()
const price = ref('')
const brand = ref('')
const category = ref('')

const brands = ref([])
const categories = ref([])

watchEffect(() => {
  brands.value = [...new Set(store.products.map(p => p.brand))].sort()
  categories.value = [...new Set(store.products.map(p => p.category))].sort()
})

const apply = () => {
  store.filterBy({ price: price.value, brand: brand.value, category: category.value })
}
const reset = () => {
  price.value = ''
  brand.value = ''
  category.value = ''
  store.filtered = store.products
}
</script>
