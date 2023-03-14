<script setup>
defineProps({
  name: String,
  data: String,
})
</script>

<template class="info-item" :id="name">
  <span
    ><span class="info-term">{{ name }}: </span
    ><span class="info-content">{{ data }}</span></span
  >
</template>

<style scoped>
.info-item {
  text-align: justify;
}
.info-term {
  font-weight: 600;
}
.info-content {
  font-weight: 300;
}
@media only screen and (min-width: 750px) {
  .info-term {
    font-size: 1.25rem;
  }
  .info-content {
    font-size: 1rem;
  }
}
</style>
