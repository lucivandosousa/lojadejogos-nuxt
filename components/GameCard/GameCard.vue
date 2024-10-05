<template>
  <div class="bg-zinc-800 p-4 rounded w-64 text-center shadow-neutral-950 shadow-md">
    <img
      class="w-full object-cover rounded"
      :src="img"
      alt=""
    />
    <div class="mt-4 flex flex-col gap-2">
      <h3 class="text-xl font-bold text-nowrap">{{title}}</h3>
      <p class="text-amber-500 font-bold">R$ {{price}}</p>
      <button
        class="bg-amber-500 p-2 rounded font-bold text-zinc-800 hover:bg-amber-700 transition-colors duration-300 ease-in-out"
      >
        Comprar
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  }
})
</script>
