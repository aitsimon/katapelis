<script setup>
    let films = [];
    fetch('https://www.omdbapi.com/?s=star&apikey=ab64c929')
        .then(res=> res.json())
        .then(data=> films=data);
</script>

<template>
    
</template>

<style>
    
</style>