<template>
  <nav class="bg-gray-800 text-white px-4 py-3">
    <div class="container mx-auto flex items-center justify-between">
      <router-link to="/" class="font-bold text-xl">Catalog</router-link>
      <router-link to="/cart" class="hover:underline">
        Cart ({{ cartCount }})
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { useCartStore } from '../store/cartStore'
import { computed } from 'vue'

const cartStore = useCartStore()
const cartCount = computed(() => cartStore.totalItems)
</script>
