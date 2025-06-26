<template>
  <section class="container mx-auto p-6">
    <FilterBar />
    <div v-if="loading" class="text-center py-12">Loading...</div>
    <div
      v-else
      class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <ProductCard v-for="p in store.filtered" :key="p.id" :product="p" />
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useProductStore } from '../store/productStore'
import ProductCard from '../components/ProductCard.vue'
import FilterBar from '../components/FilterBar.vue'

const store = useProductStore()
const loading = ref(false)

onMounted(async () => {
  if (!store.products.length) {
    loading.value = true
    await store.loadProducts()
    loading.value = false
  }
})
</script>
