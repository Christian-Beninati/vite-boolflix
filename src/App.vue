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
  components: { AppMain, AppHeader },
}

</script>

<template>
  <!-- AppHeader -->
  <AppHeader />

  <!-- AppMain -->
  <AppMain />
</template>

<style lang="scss">
@use './assets///scss/style.scss'
</style>
