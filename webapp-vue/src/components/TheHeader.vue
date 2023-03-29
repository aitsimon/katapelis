<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
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
function randomHome() {
  router.replace('/?page=1&search=' + randomInitialFilms())
}
</script>

<template>
  <header>
    <div id="header-wrapper">
      <a @click="randomHome" id="logo-container">
        <img src="./icons/logo.svg" id="logo" alt="logo of the web" />
      </a>
    </div>
  </header>
</template>

<style scoped>
/* Mobile */
header {
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
}
#header-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding: 2% 5%;
}
#logo-container {
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: all 0.25s ease-in-out;
  cursor: pointer;
}
#logo-container:hover {
  transform: scale(1.1);
}
#logo {
  width: 10vh;
  height: 10vh;
  filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(141deg)
    brightness(107%) contrast(100%);
}

/* Tablet */
@media only screen and (min-width: 600px) {
  #header-wrapper {
    padding: 2.5% 5%;
  }
  #logo-container {
    width: fit-content;
    height: 40%;
  }
  #search-wrapper input {
    height: 25%;
  }
  #logo {
    width: 25%;
    height: 10%;
  }
}
</style>
