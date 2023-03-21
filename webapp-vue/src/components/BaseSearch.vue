<script setup>
const emit = defineEmits(['changeText'])
const handleEvent = event => {
  emit('changeText', event.target.value)
}
</script>

<template>
  <input
    type="text"
    placeholder="Search a film by title"
    @input="handleEvent($event)"
  />
</template>

<style scoped>
input {
  position: static;
  background-color: rgba(245, 245, 245, 0.557);
  width: fit-content;
  height: 5vh;
  border: none;
  border-radius: 8px;
  color: white;
  outline: none;
  font-size: large;
  padding-left: 1vw;
  font-weight: 100;
  margin-bottom: 5%;
}
input::placeholder {
  color: white;
  font-size: medium;
  font-weight: 100;
}
@media only screen and (min-width: 600px) {
  input {
    position: absolute !important;
    right: 8%;
    top: 8%;
  }
}
</style>
