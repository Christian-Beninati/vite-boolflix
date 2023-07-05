<script>

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
