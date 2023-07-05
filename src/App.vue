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

  // ------------ MEHODS --------
  methods: {
    handleSearch(searchTerm) { // Gestisco l'evento di ricerca
      // Chiamata all'API per ottenere i film
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.api_Key}&query=${searchTerm}&language=it-IT`)
        .then(response => {
          const movies = response.data.results; // Ottengo i film dalla risposta
          store.movies = movies; // Aggiorno lo store con i film trovati
        })
        .catch(error => {
          console.error(error); // Error
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

  <!-- Passo la proprietà "movies" dallo store al componente AppMain -->
  <AppMain :movies="store.movies" />
</template>

 <!-- ? ------------- STYLE ------------->

<style lang="scss">
@use './assets///scss/style.scss'
</style>



