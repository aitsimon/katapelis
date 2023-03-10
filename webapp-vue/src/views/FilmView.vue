<script setup>
import { onMounted } from 'vue'
import { useFilmDetailsStore } from '../store/filmDetails'
import BaseLoader from '../components/BaseLoader.vue'
const filmDetailsStore = useFilmDetailsStore()
onMounted(() => filmDetailsStore.getFilmDetails())
</script>

<template>
  <div v-if="filmDetailsStore.loading">
    <BaseLoader />
  </div>
  <div v-else id="main-content">
    <article id="film-poster">
      <img :src="`${filmDetailsStore.filmDetails.Poster}`" />
    </article>
    <article id="film-info">
      <h1>{{ filmDetailsStore.filmDetails.Title }}</h1>
      <section id="film-info-specs">
        <section class="info-item" id="year">
          <span
            ><span class="info-term">Year: </span
            ><span class="info-content">{{
              filmDetailsStore.filmDetails.Year
            }}</span></span
          >
        </section>
        <section class="info-item" id="rated">
          <span
            ><span class="info-term">Rated: </span
            ><span class="info-content">{{
              filmDetailsStore.filmDetails.Rated
            }}</span></span
          >
        </section>
        <section class="info-item" id="released">
          <span
            ><span class="info-term">Released: </span
            ><span class="info-content">{{
              filmDetailsStore.filmDetails.Released
            }}</span></span
          >
        </section>
        <section class="info-item" id="runtime">
          <span
            ><span class="info-term">Runtime: </span
            ><span class="info-content">{{
              filmDetailsStore.filmDetails.Runtime
            }}</span></span
          >
        </section>
        <section class="info-item" id="genre">
          <span
            ><span class="info-term">Genre: </span
            ><span class="info-content">{{
              filmDetailsStore.filmDetails.Genre
            }}</span></span
          >
        </section>
        <section class="info-item" id="director">
          <span
            ><span class="info-term">Director: </span
            ><span class="info-content">{{
              filmDetailsStore.filmDetails.Director
            }}</span></span
          >
        </section>
        <section class="info-item" id="writer">
          <span
            ><span class="info-term">Writer: </span
            ><span class="info-content">{{
              filmDetailsStore.filmDetails.Writer
            }}</span></span
          >
        </section>
        <section class="info-item" id="actors">
          <span
            ><span class="info-term">Actors: </span
            ><span class="info-content">{{
              filmDetailsStore.filmDetails.Actors
            }}</span></span
          >
        </section>
        <section class="info-item" id="plot">
          <span
            ><span class="info-term">Plot: </span
            ><span class="info-content">{{
              filmDetailsStore.filmDetails.Plot
            }}</span></span
          >
        </section>
        <section class="info-item" id="language">
          <span
            ><span class="info-term">Language: </span
            ><span class="info-content">{{
              filmDetailsStore.filmDetails.Language
            }}</span></span
          >
        </section>
        <section class="info-item" id="country">
          <span
            ><span class="info-term">Country: </span
            ><span class="info-content">{{
              filmDetailsStore.filmDetails.Country
            }}</span></span
          >
        </section>
        <section class="info-item" id="awards">
          <span
            ><span class="info-term">Awards: </span
            ><span class="info-content">{{
              filmDetailsStore.filmDetails.Awards
            }}</span></span
          >
        </section>
        <div id="film-rating">
          <img src="../assets/icons8-imdb-96.png" alt="IMDB icon" />
          <span id="rating-score">{{
            filmDetailsStore.filmDetails?.Ratings[0]?.Value
          }}</span>
        </div>
      </section>
    </article>
  </div>
</template>

<style scoped>
/* Content */
#main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin: 0;
  margin: 5% 0%;
}
#film-poster {
  display: flex;
  justify-content: center;
  align-items: center;
}
#film-poster img {
  scale: 0.8;
}
#film-info {
  display: flex;
  flex-direction: column;
  width: 85%;
  gap: 3vh;
}
#film-info h1 {
  text-transform: capitalize;
  font-weight: 400;
}
#film-info-specs {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  gap: 2vh;
}
.info-item {
  text-align: justify;
}
.info-term {
  font-weight: 600;
}
.info-content {
  font-weight: 300;
}
#film-rating {
  width: 100%;
  margin: 2.5% 0%;
  display: flex;
  flex-direction: row;
  align-items: center !important;
  justify-content: space-around;
}
#film-rating img {
  height: 6rem;
}
#rating-score {
  font-size: 2rem;
}
/* Footer */
#footer {
  width: 100%;
  height: 10vh;
  border-top: 1px solid #ffffff40;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
#footer span > span {
  font-style: italic;
}
/*Tablet*/
@media only screen and (min-width: 750px) {
  #header {
    height: 5%;
  }
  #header-wrapper {
    padding: 0% 5%;
  }
  #logo-container {
    width: 10%;
    height: 10%;
  }
  #search-wrapper input {
    height: 25%;
  }
  #logo {
    width: 50%;
    height: 25%;
  }
  #search {
    width: 90%;
    height: 50%;
  }

  #nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  #main-content {
    width: 85%;
    display: flex;
    flex-direction: row;
    gap: 10%;
    height: fit-content;
    margin-bottom: 0;
    margin: 5% 0%;
  }
  #film-poster img {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80%;
  }
  #film-poster {
    width: 40%;
  }
  #film-info {
    width: 40%;
  }
  #film-info h1 {
    font-size: 3rem;
  }
  .info-term {
    font-size: 1.25rem;
  }
  .info-content {
    font-size: 1rem;
  }
}
</style>
