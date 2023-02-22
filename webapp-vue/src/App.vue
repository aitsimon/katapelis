<script setup>
import HeaderPage from './components/HeaderPage.vue';


</script>

<template>
  <div id="content-wrapper">
    <HeaderPage></HeaderPage>

  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}
@font-face {
  font-family: 'Inter';
  src: url('../assets/Inter/Inter-VariableFont_slnt\,wght.ttf')
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


</style>