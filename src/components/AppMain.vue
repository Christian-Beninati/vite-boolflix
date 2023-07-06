<script>
export default {
    props: ['movies'], // Props "movies" 

    computed: {
        flagImages() {
            return {
                en: 'src/assets/img/en.png',
                it: 'src/assets/img/it.png'
            };
        }
    },

    methods: {
        hasFlagLanguage(language) {
            return language === 'en' || language === 'it';
        },
        flagImagePath(language) {
            return this.flagImages[language] || '';
        }
    }
};
</script>

<template>
    <main>
        <ul>
            <li v-for="movie in movies" :key="movie.id">
                <h3>{{ movie.title }}</h3>
                <p>{{ movie.original_title }}</p>
                <template v-if="hasFlagLanguage(movie.original_language)">
                    <img :src="flagImagePath(movie.original_language)" :alt="movie.original_language" />
                </template>
                <template v-else>
                    <p>{{ movie.original_language }}</p>
                </template>
                <p>Voto: {{ movie.vote_average }}</p>
            </li>
        </ul>
    </main>
</template>

<style lang="scss" scoped></style>
