<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
defineProps(['start', 'lastPageIndex', 'pageIndex', 'defaultInit'])
const emit = defineEmits(['next', 'prev', 'first', 'last'])
</script>
<template>
  <div>
    <button
      @click="emit('prev')"
      type="button"
      :disabled="pageIndex <= start || !defaultInit"
    >
      Previous {{ pageIndex === 1 ? '' : pageIndex - 1 }}
    </button>
    <button
      @click="emit('next')"
      type="button"
      :disabled="lastPageIndex <= pageIndex || !defaultInit"
    >
      <!-- Next {{ pageIndex === 1 ? '' : pageIndex + 1 }} -->
      Next {{ parseInt(route.query.page) + 1 }}
    </button>
    <button @click="emit('first')" type="button" :disabled="!defaultInit">
      First Page
    </button>
    <button @click="emit('last')" type="button" :disabled="!defaultInit">
      Last Page
    </button>
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
