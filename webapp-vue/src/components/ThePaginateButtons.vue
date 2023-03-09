<script setup>
defineProps(['firstPage', 'lastPage', 'currentPage'])
const emit = defineEmits(['next', 'prev', 'first', 'last'])
</script>
<template>
  <div>
    <button
      @click="emit('prev')"
      type="button"
      :disabled="currentPage <= firstPage"
    >
      Previous {{ currentPage === 1 ? '' : currentPage - 1 }}
    </button>
    <button
      @click="emit('next')"
      type="button"
      :disabled="lastPage <= currentPage"
    >
      Next {{ currentPage === 1 ? '' : currentPage + 1 }}
    </button>
    <button @click="emit('first')" type="button">First Page</button>
    <button @click="emit('last')" type="button">Last Page</button>
  </div>
</template>
<style scoped>
div {
  margin: 0% 0% 5% 0%;
}
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
