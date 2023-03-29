<script setup>
// import { watch } from 'vue'
import BaseFilmCard from '@/components/BaseFilmCard.vue'
import BaseSearch from '../components/BaseSearch.vue'
import ThePaginateButtons from '../components/ThePaginateButtons.vue'
import BaseLoader from '../components/BaseLoader.vue'
import { useFilmsStore } from '../store/films'
import { onMounted } from 'vue'
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'
import apiservice from '@/api-service.js'
function randomInitialFilms() {
  const titles = [
    'star',
    'avengers',
    'lord',
    'disney',
    'batman',
    'avatar',
    'saw',
    'mickey',
    'time',
  ]
  return titles[Math.floor(Math.random() * titles.length)]
}
const router = useRouter()
const route = useRoute()
const filmsStore = useFilmsStore()
onMounted(() => {
  router.replace('/?page=1&search=' + randomInitialFilms())
})
// watch(
//   () => route.query.search,
//   async searchedText => {
//     filmsStore.getFilms(searchedText)
//     filmsStore.defaultInit = true
//   },
// )
// watch(
//   () => route.query.page,
//   async newCurrentPage => {
//     filmsStore.getFilms(route.query.search, newCurrentPage)
//   },
// )
onBeforeRouteUpdate(to => {
  apiservice.getFilms(to.query.search, to.query.page)
})
</script>

<template>
  <BaseSearch
    @changeText="
      searchedText => router.replace('/?page=1&search=' + searchedText)
    "
  />
  <ThePaginateButtons
    @next="
      router.replace(
        '/?page=' +
          (parseInt(route.query.page) + 1) +
          '&search=' +
          route.query.search,
      )
    "
    @prev="
      router.replace(
        '/?page=' +
          (parseInt(route.query.page) - 1) +
          '&search=' +
          route.query.search,
      )
    "
    @first="router.replace('/?page=1&search=' + route.query.search)"
    @last="
      router.replace(
        '/?page=' + apiservice.lastPage + '&search=' + route.query.search,
      )
    "
    :first-page="apiservice.firstPage"
    :current-page="apiservice.currentPage"
    :last-page="apiservice.lastPage"
  />
  <article id="featured-films-wrapper">
    <section id="featured-films">
      <template v-if="apiservice.loading"><BaseLoader /></template>
      <template v-else>
        <BaseFilmCard
          v-for="film in apiservice.films.value"
          :key="film.imdbID"
          :titulo="film.Title"
          :poster="film.Poster"
          :id="film.imdbID"
        >
        </BaseFilmCard>
      </template>
    </section>
  </article>
</template>

<style scoped>
#featured-films-wrapper {
  width: 90%;
  height: 100%;
}
#featured-films {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 100%);
  grid-auto-rows: auto;
  /* row-gap: 1%; */
}

@media only screen and (min-width: 600px) {
  #featured-films {
    display: grid;
    justify-content: center;
    width: 100%;
    margin: 0;
    padding: 0;
    grid-template-columns: repeat(2, 45%);
    column-gap: 1%;
  }
}
@media only screen and (min-width: 992px) {
  #featured-films {
    grid-template-columns: repeat(3, 30%);
    column-gap: 3.33%;
  }
}
</style>
