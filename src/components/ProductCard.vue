<template>
  <router-link :to="`/product/${product.id}`" class="block">
    <div class="border rounded-lg overflow-hidden hover:shadow-lg transition">
      <img
        :src="product.image"
        :alt="product.title"
        class="w-full h-48 object-contain bg-white"
      />
      <div class="p-4">
        <h3 class="font-semibold mb-2 line-clamp-2">{{ product.title }}</h3>
        <p class="text-lg font-bold">{{ product.price }} $</p>
      </div>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  product: { type: Object, required: true },
})
</script>
