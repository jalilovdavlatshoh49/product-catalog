<template>
  <div class="container mx-auto p-6">
    <h2 class="text-2xl font-bold mb-6">Сабади харид</h2>
    <div v-if="!items.length">Сабад холӣ аст.</div>
    <div v-else class="space-y-4">
      <div
        v-for="item in items"
        :key="item.product.id"
        class="flex items-center gap-4"
      >
        <img
          :src="item.product.image"
          alt=""
          class="w-16 h-16 object-contain bg-white border"
        />
        <div class="flex-1">
          <p class="font-medium">{{ item.product.title }}</p>
          <p>
            {{ item.qty }} × {{ item.product.price }} $
          </p>
        </div>
        <button class="text-red-600" @click="remove(item.product.id)">
          Хориҷ
        </button>
      </div>
      <div class="text-right text-xl font-bold">
        Ҷамъ: {{ totalPrice }} $
      </div>
      <button
        class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        @click="checkout"
      >
        Фармоиш додан
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../store/cartStore'
import { computed } from 'vue'

const cartStore = useCartStore()
const items = cartStore.items
const totalPrice = computed(() => cartStore.totalPrice)

const remove = id => cartStore.remove(id)

const checkout = () => {
  alert('Фармоиш қабул шуд! 😊')
  cartStore.clear()
}
</script>
