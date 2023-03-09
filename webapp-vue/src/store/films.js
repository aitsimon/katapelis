import { defineStore } from 'pinia'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

export const useFilmsStore = defineStore('filmStore', () => {
  let films = ref([])
  let currentPage = ref(1)
  let firstPage = ref(1)
  let lastPage = ref(0)
  let defaultInit = ref(false)
  let loading = ref(true)
  const route = useRoute()

  function getFilms(
    text = route.query.search,
    page = route.query.page !== undefined ? route.query.page : 1,
  ) {
    loading.value = true
    currentPage.value = parseInt(page)
    fetch(
      `https://www.omdbapi.com/?s=${text
        .toLowerCase()
        .trim()}&apikey=ab64c929&page=${page}`,
    )
      .then(res => res.json())
      .then(data => {
        loading.value = false
        lastPage.value = Math.round(parseInt(data.totalResults) / 10)
        films.value = data.Search
      })
  }
  return {
    films,
    firstPage,
    currentPage,
    lastPage,
    defaultInit,
    loading,
    getFilms,
  }
})
