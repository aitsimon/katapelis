<script setup>
import FilmCard from './FilmCard.vue';
import { ref } from 'vue';
import {RouterLink} from 'vue-router';


const films = ref([]);
fetch('https://www.omdbapi.com/?s=star&apikey=ab64c929')
  .then(res => res.json())
  .then(data => (films.value = data.Search))
</script>

<template>
     <article id="featured-films-wrapper">
        <section id="featured-films">
          <FilmCard
            v-for="film in films"
            :key="film.title"
            :titulo="film.Title"
            :poster="film.Poster"
            :id ="film.imdbID"
          >
        </FilmCard>
        </section>
      </article>
</template>

<style>
    
</style>