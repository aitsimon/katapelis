import { defineStore } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'

export const useFilmsStore = defineStore('filmStore', () => {
  let films = ref([])
  let pageIndex = ref(1)
  let startIndex = ref(1)
  let lastIndex = ref(0)
  let defaultInit = ref(false)
  let loading = ref(true)
  let textEntered = ref('')
  const route = useRoute()
  const router = useRouter()

  function getFilms(
    text = route.query.search || randomInitialFilms(),
    page = route.query.page !== undefined ? route.query.page : 1,
  ) {
    loading.value = true
    defaultInit.value = true
    textEntered.value = text
    pageIndex.value = page
    fetch(
      `https://www.omdbapi.com/?s=${text
        .toLowerCase()
        .trim()}&apikey=ab64c929&page=${page}`,
    )
      .then(res => res.json())
      .then(data => {
        loading.value = false
        lastIndex.value = Math.round(parseInt(data.totalResults) / 10)
        films.value = data.Search
      })
  }
  // eslint-disable-next-line no-unused-vars
  function nextPage() {
    pageIndex.value++
    getFilms(textEntered.value, pageIndex.value)
  }
  // eslint-disable-next-line no-unused-vars
  function previousPage() {
    pageIndex.value--
    getFilms(textEntered.value, pageIndex.value)
  }
  // eslint-disable-next-line no-unused-vars
  function goLastPage() {
    pageIndex.value = lastIndex.value
    getFilms(textEntered.value, pageIndex.value)
  }
  // eslint-disable-next-line no-unused-vars
  function goFirstPage() {
    pageIndex.value = startIndex.value
    getFilms(textEntered.value, pageIndex.value)
  }
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

  return {
    films,
    startIndex,
    pageIndex,
    lastIndex,
    defaultInit,
    loading,
    getFilms,
    nextPage,
    previousPage,
    goFirstPage,
    goLastPage,
  }
})
