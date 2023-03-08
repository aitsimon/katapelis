import { defineStore } from 'pinia'
import axios from 'axios'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

export const useFilmDetailsStore = defineStore('filmDetailsStore', () => {
  const TWO_MINUTES = 120000
  let filmDetails = ref([])
  let cachedFilmDetails = ref([])
  let loading = ref(true)
  const route = useRoute()

  // eslint-disable-next-line no-unused-vars
  async function getFilmDetails() {
    if (filmExistsInStore(route.params.id) !== false) {
      filmDetails.value = filmExistsInStore(route.params.id)
      loading.value = false
    } else {
      try {
        const { data } = await axios.get(
          'https://www.omdbapi.com/?apikey=ab64c929&i=' + route.params.id,
        )
        filmDetails.value = data
        data !== undefined
          ? cachedFilmDetails.value.push({ id: route.params.id, data: data })
          : ''
        setTimeout(
          () =>
            cachedFilmDetails.value.splice(
              cachedFilmDetails.value.indexOf(data),
              1,
            ),
          TWO_MINUTES,
        )
        loading.value = false
      } catch (error) {
        console.log(error)
      }
    }
  }
  function filmExistsInStore(id) {
    let check = false
    let filmDetails = null
    cachedFilmDetails.value.forEach(element => {
      if (element.id == id) {
        check = true
        filmDetails = element.data
      }
    })
    return check ? filmDetails : false
  }
  return { filmDetails, loading, getFilmDetails }
})