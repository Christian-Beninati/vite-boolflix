 <!-- ? ------------- SCRIPT ------------->
<script>
// Import axios
import axios from 'axios';
// Endpoint

// Import Store precedentemente esportato da store.js
import { store } from './data/store.js'

// Import AppHeader
import AppHeader from './/components/AppHeader.vue';

// Import AppMain
import AppMain from './/components/AppMain.vue';

// URL di base delle immagini
const imageBaseUrl = 'https://image.tmdb.org/t/p/w342';

export default {
  // Registro componenti come componenti figli
  components: { AppMain, AppHeader },

  // ------------ DATA --------
  data() {
    return {
      // Store
      store,
      // Api_Key TMDB
      api_Key: 'dffc623688a06f2161dd29811e4b854c',
    };
  },

  // ------------ COMPUTED --------
  computed: {
    apiConfig() {
      return {
        params: {
          api_key: this.api_Key,
          language: 'it-IT',
        },
      };
    },
  },

  // ------------ MEHODS --------
  methods: {
    handleSearch(searchTerm) {
      const movieRequest = axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}`, this.apiConfig);
      const tvRequest = axios.get(`https://api.themoviedb.org/3/search/tv?query=${searchTerm}`, this.apiConfig);

      axios.all([movieRequest, tvRequest])
        .then(axios.spread((movieResponse, tvResponse) => {
          store.movies = movieResponse.data.results;
          store.series = tvResponse.data.results;
        }))
        .catch(error => {
          console.error(error);
        });
    },
  },
}
</script>

 <!-- ? ------------- TEMPLATE ------------->

<template>
  <!-- AppHeader -->

  <!-- Emetto l'evento "search" al componente AppHeader e chiamo il metodo "handleSearch" -->
  <AppHeader @search="handleSearch" />

  <!-- AppMain -->

  <!-- Passo la proprietà "movies" e "series" dallo store al componente AppMain -->
  <AppMain :movies="store.movies" :series="store.series" />
</template>

 <!-- ? ------------- STYLE ------------->

<style lang="scss">
@use './assets///scss/style.scss'
</style>



