import { useRoute } from 'vue-router'
import { ref } from 'vue'

var apiService = {
  films: ref([]),
  loading: ref(true),
  route: useRoute(),
  currentPage: ref(1),
  firstPage: ref(1),
  lastPage: ref(0),
  key: 'ab64c929',
  getFilms(
    text = this.route.query.search,
    page = this.route.query.page !== undefined ? this.route.query.page : 1,
  ) {
    this.loading = false
    this.currentPage = parseInt(page)
    this._fetchFilms(text, page)
  },
  _fetchFilms(text, page) {
    fetch(
      `https://www.omdbapi.com/?s=${text.toLowerCase().trim()}&apikey=${
        this.key
      }&page=${page}`,
    )
      .then(res => res.json())
      .then(data => {
        this.loading = false
        this.lastPage.value = Math.round(parseInt(data.totalResults) / 10)
        this.films.value = data.Search
      })
  },
}
export default apiService
