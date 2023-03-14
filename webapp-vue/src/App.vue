<script setup>
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <div id="content-wrapper">
    <TheHeader />
    <main id="content">
      <RouterView />
    </main>
    <TheFooter />
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}
@font-face {
  font-family: 'Inter';
  src: url('src/assets/Inter/Inter-VariableFont_slnt\,wght.ttf')
    format('truetype');
}
:root {
  --light-blue: #004e92;
  --dark-blue: #000428;
  --pure-white: #ffffff;
}

body {
  width: 100%;
  height: 190vh;
  padding: 0;
  margin: 0;
  background-image: linear-gradient(#000428, #004e92);
  background-size: contain;
  background-repeat: no-repeat;
}

a:any-link {
  color: white;
  text-decoration: none;
}
#content-wrapper {
  width: 100%;
  height: max-content;
  font-family: Inter, sanserfif;
  color: var(--pure-white);
  display: flex;
  flex-direction: column;
  align-items: center;
}
#content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 90%;
  padding: 2% 0%;
}
</style>
