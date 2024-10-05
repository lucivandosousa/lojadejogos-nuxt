<template>
  <input
    :type="props.type"
    :placeholder="props.placeholder"
    class='w-full p-2 rounded bg-zinc-800 text-white outline-none transition-colors duration-300 ease-in-out focus:bg-gray-600 md:w-80'
  />
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  }
})
</script>