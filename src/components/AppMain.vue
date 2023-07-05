<script>
export default {
    props: ['movies'], // Props "movies" (dallo Store)
};
</script>

<template>
    <div>
        <div v-for="movie in movies" :key="movie.id">
            <h3>{{ movie.title }}</h3>
            <p>Titolo Originale: {{ movie.original_title }}</p>
            <p>Lingua: {{ movie.original_language }}</p>
            <p>Voto: {{ movie.vote_average }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
