<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  titulo: {
    type: String,
    default: 'Default name',
  },
  poster: {
    type: String,
    default: 'assets/imgs/imgPlaceholder.png',
  },
  id: {
    type: String,
    required: true,
  },
})
const handlePoster = url => {
  return url !== 'N/A' ? url : 'src/assets/imgs/imagePlaceHolder.png'
}
</script>

<template>
  <section class="film">
    <router-link :to="`/${id}`">
      <span> {{ titulo }}</span></router-link
    >
    <img :src="handlePoster(poster)" />
  </section>
</template>

<style scoped>
.film {
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  margin: 10% 0%;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}
.film > img {
  aspect-ratio: 3 / 4;
  transform: scale(0.8);
}
.film > span {
  margin-top: 2%;
  margin-bottom: 2%;
  font-size: larger;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.film:hover {
  transform: scale(1.05);
}

@media only screen and (min-width: 600px) {
  .film > span {
    font-size: larger;
    font-weight: 500;
  }
}
@media only screen and (min-width: 992px) {
  .film > span {
    font-size: larger;
  }
}
</style>
