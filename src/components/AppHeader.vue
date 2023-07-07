<script>
// import SerchForm
import SearchForm from './/SearchForm.vue';

export default {
    // Registro componente come componente figlio
    components: { SearchForm },

    // Dichiaro l'evento "search"
    emits: ['search'],

    methods: {
        // Gestisco l'evento di ricerca
        handleSearch(searchTerm) {
            // Emetto l'evento "search" con il termine di ricerca al componente genitore
            this.$emit('search', searchTerm);
        },
    },
}
</script>

<template>
    <header>
        <div class="search-form d-flex align-items-center justify-content-between container h-100">
            <h1 class="m-0">Boolflix</h1>
            <!-- Ascolta l'evento "submit"  per avviare la ricerca -->
            <SearchForm @submit="handleSearch" class="d-flex" />
        </div>
    </header>
</template>

<style lang="scss">
@use '../assets/scss/vars' as *;

header {
    height: 100px;
    background-color: $black;
}

h1 {
    color: $red;
    text-transform: uppercase;
    font-size: 45px;
}


button {
    background-color: $red;
    color: $white;
    padding: 0 10px;
}
</style>
