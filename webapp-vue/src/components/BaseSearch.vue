<script setup>
import { ref } from 'vue'

const emit = defineEmits(['changeText'])
const handleEvent = event => {
  emit('changeText', event.target.value)
}
</script>

<template>
  <input
    type="text"
    placeholder="Search a film by title"
    @input="handleEvent($event)"
  />
</template>

<style></style>
