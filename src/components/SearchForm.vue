<script>
export default {
    data() {
        return {
            searchTerm: '', // Dato input per la ricerca
        };
    },
    emits: ['submit'], // Dichiaro l'evento "submit" 
    methods: {
        submitForm() {
            // Emette l'evento "submit" con il valore di ricerca
            this.$emit('submit', this.searchTerm);
        },
    },
};
</script>

<template>
    <form @submit.prevent="submitForm">
        <!-- Input per il termine di ricerca, collegato a "searchTerm" tramite v-model -->
        <input type="text" class="form-control " placeholder="Search..." v-model.trim="searchTerm">
        <!-- button -->
        <button type="submit">Search</button>
    </form>
</template>

<style lang="scss" scoped>
@use '../assets/scss/vars' as *;

input {
    width: 300px;
    border-radius: 0;
}
</style>
