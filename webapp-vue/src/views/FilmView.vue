<script setup>
import { onMounted } from 'vue'
import { useFilmDetailsStore } from '../store/filmDetails'
import BaseLoader from '../components/BaseLoader.vue'
import BaseFilmInfoItem from '../components/BaseFilmInfoItem.vue'
const filmDetailsStore = useFilmDetailsStore()
onMounted(() => filmDetailsStore.getFilmDetails())
const scapeItemIteration = ['Ratings', 'imdbRating', 'imdbVotes']
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
      <template
        id="film-info-specs"
        v-for="(value, key) in filmDetailsStore.filmDetails"
        :key="key"
      >
        <template v-if="!scapeItemIteration.includes(key)">
          <BaseFilmInfoItem :name="key" :data="value" />
        </template>
      </template>
      <div id="film-rating">
        <img src="../assets/icons8-imdb-96.png" alt="IMDB icon" />
        <span id="rating-score">{{
          filmDetailsStore.filmDetails?.Ratings[0]?.Value
        }}</span>
      </div>
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
}
</style>
