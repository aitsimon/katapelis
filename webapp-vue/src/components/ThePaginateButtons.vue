<script setup>
defineProps(['inicio', 'ultimaPagina', 'pageIndex', 'defaultInit'])
const emit = defineEmits(['next', 'prev'])
</script>
<template>
  <div>
    <button
      @click="emit('prev')"
      type="button"
      :disabled="pageIndex <= inicio || !defaultInit"
    >
      Previous {{ pageIndex === 1 ? '' : pageIndex - 1 }}
    </button>
    <button
      @click="emit('next')"
      type="button"
      :disabled="ultimaPagina <= pageIndex || !defaultInit"
    >
      Next {{ pageIndex === 1 ? '' : pageIndex + 1 }}
    </button>
  </div>
</template>
<style scoped>
div > button {
  margin-right: 2vw;
  padding: 1vh 2vw;
  border-radius: 7px;
  border: none;
  background-color: rgba(245, 245, 245, 0.557);
}
div > button:enabled {
  color: aliceblue;
  cursor: pointer;
}
</style>
