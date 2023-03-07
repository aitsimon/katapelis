import { defineStore } from 'pinia'
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
    }
  },
  actions: {
    //if text param is not provided then by default is the last search text in sessionStorage
    /**
     * if page param is not provided then by default it checks if the text in the sessionStorage
     * matches with the current search text. If it does, then it searches the sessionStorage for
     * page Index of the previous search. Otherwise it searches the page equals to 1 because its
     * a new search term.
     */
    getFilms(
      text = sessionStorage.getItem('textEntered'),
      page = sessionStorage.getItem('textEntered') === text
        ? sessionStorage.getItem('pageIndex')
        : 1,
    ) {
      this.loading = true
      this.defaultInit = true
      this.textEntered = text
      this.pageIndex = page
      sessionStorage.setItem('pageIndex', page)
      sessionStorage.setItem('textEntered', text)
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
      const randomIndex = titles[Math.floor(Math.random() * titles.length)]
      fetch(`https://www.omdbapi.com/?s=${randomIndex}&apikey=ab64c929`)
        .then(res => res.json())
        .then(data => {
          this.loading = false
          this.films = data.Search
        })
    },
  },
})
