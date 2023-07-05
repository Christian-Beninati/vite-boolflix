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
    <!-- Ascolta l'evento "submit"  per avviare la ricerca -->
    <SearchForm @submit="handleSearch" />
</template>

<style lang="scss" scoped></style>
