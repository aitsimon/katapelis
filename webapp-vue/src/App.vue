<script setup>
import { ref } from 'vue'
import {RouterLink ,  RouterView } from 'vue-router';
import HeaderPage from './components/HeaderPage.vue'


</script>

<template>
  <div id="content-wrapper">
    <HeaderPage></HeaderPage>
    <main id="content">
     
      <RouterView />
    </main>
  </div>
  
</template>

<style>
* {
  padding: 0;
  margin: 0;
}
@font-face {
  font-family: 'Inter';
  src: url('./src/assets/Inter/Inter-VariableFont_slnt\,wght.ttf')
    format('truetype');
}
:root {
  --light-blue: #004e92;
  --dark-blue: #000428;
  --pure-white: #ffffff;
}

body {
  height: fit-content;
  width: 100%;
  padding: 0;
  margin: 0;
}
a:any-link{
  color: white;
  text-decoration: none;
}
#content-wrapper {
  width: 100%;
  height: 100%;
  font-family: Inter, sanserfif;
  color: var(--pure-white);
  background-image: linear-gradient(var(--dark-blue), var(--light-blue));
  background-size: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 2% 0%;
}
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
    column-gap: 5%;
  }
}
@media only screen and (min-width: 992px) {
  #featured-films {
    grid-template-columns: repeat(3, 30%);
    column-gap: 3.33%;
  }
}
</style>
