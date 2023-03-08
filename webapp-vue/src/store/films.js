import { defineStore } from 'pinia'
import { useRoute, useRouter } from 'vue-router'

export const useFilmsStore = defineStore('filmsStore', {
  state: () => {
    return {
      films: [],
      pageIndex: 1,
      startIndex: 1,
      lastIndex: 0,
      defaultInit: false,
      loading: true,
      textEntered: '',
      route: useRoute(),
      router: useRouter(),
    }
  },
  actions: {
    //if text param is not provided then by default is the last search text in URL
    /**
     * if page param is not provided then by default it checks if the text in the URL
     * matches with the current search text. If it does, then it searches the URL for
     * page Index of the previous search. Otherwise it searches the page equals to 1 because its
     * a new search term.
     */
    getFilms(
      text = new URLSearchParams(document.location.href).get('search') ||
        this.randomInitialFilms(),
      page = new URLSearchParams(document.location.href).get(
        'http://127.0.0.1:5173/?page',
      ) !== null || undefined
        ? new URLSearchParams(document.location.href).get(
            'http://127.0.0.1:5173/?page',
          )
        : 1,
    ) {
      this.router.push(`/?page=${page}&search=${text}`)
      this.loading = true
      this.defaultInit = true
      this.textEntered = text
      this.pageIndex = page
      fetch(
        `https://www.omdbapi.com/?s=${text
          .toLowerCase()
          .trim()}&apikey=ab64c929&page=${page}`,
      )
        .then(res => res.json())
        .then(data => {
          this.loading = false
          this.lastIndex = Math.floor(parseInt(data.totalResults) / 10)
          this.films = data.Search
        })
    },
    nextPage() {
      this.pageIndex++
      this.getFilms(this.textEntered, this.pageIndex)
    },
    previousPage() {
      this.pageIndex--
      this.getFilms(this.textEntered, this.pageIndex)
    },
    goLastPage() {
      this.pageIndex = this.lastIndex
      this.getFilms(this.textEntered, this.pageIndex)
    },
    goFirstPage() {
      this.pageIndex = this.startIndex
      this.getFilms(this.textEntered, this.pageIndex)
    },
    randomInitialFilms() {
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
    },
  },
})
