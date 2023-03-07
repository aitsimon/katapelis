<script setup>
import BaseFilmCard from '@/components/BaseFilmCard.vue'
import BaseSearch from '../components/BaseSearch.vue'
import ThePaginateButtons from '../components/ThePaginateButtons.vue'
import { useFilmsStore } from '../store/films'
import { onMounted } from 'vue'
const filmsStore = useFilmsStore()
onMounted(() => filmsStore.getFilms())
</script>

<template>
  <BaseSearch @changeText="texto => filmsStore.getFilms(texto)" />
  <ThePaginateButtons
    @next="filmsStore.nextPage()"
    @prev="filmsStore.previousPage()"
    @first="filmsStore.goFirstPage()"
    @last="filmsStore.goLastPage()"
    :start="filmsStore.startIndex"
    :pageIndex="filmsStore.pageIndex"
    :lastPageIndex="filmsStore.lastIndex"
    :defaultInit="filmsStore.defaultInit"
  />
  <article id="featured-films-wrapper">
    <section id="featured-films">
      <template v-if="filmsStore.loading"
        ><span class="loader"></span
      ></template>
      <template v-else>
        <BaseFilmCard
          v-for="film in filmsStore.films"
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
.loader {
  color: lawngreen;
  font-size: 45px;
  text-indent: -9999em;
  overflow: hidden;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateZ(0);
  animation: mltShdSpin 1.7s infinite ease, round 1.7s infinite ease;
}

@keyframes mltShdSpin {
  0% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
      0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  5%,
  95% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
      0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  10%,
  59% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em,
      -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em,
      -0.297em -0.775em 0 -0.477em;
  }
  20% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,
      -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em,
      -0.749em -0.34em 0 -0.477em;
  }
  38% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,
      -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em,
      -0.82em -0.09em 0 -0.477em;
  }
  100% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
      0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
}

@keyframes round {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
