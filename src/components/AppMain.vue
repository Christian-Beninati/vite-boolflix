<script>
export default {
    props: ['movies', 'series'],

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
        <section id="films">
            <h1>Films</h1>
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
        </section>

        <section id="series">
            <h1>Series</h1>
            <ul>
                <li v-for="serie in series" :key="serie.id">
                    <h3>{{ serie.name }}</h3>
                    <p>{{ serie.original_name }}</p>
                    <template v-if="hasFlagLanguage(serie.original_language)">
                        <img :src="flagImagePath(serie.original_language)" :alt="serie.original_language" />
                    </template>
                    <template v-else>
                        <p>{{ serie.original_language }}</p>
                    </template>
                    <p>Voto: {{ serie.vote_average }}</p>
                </li>
            </ul>
        </section>
    </main>
</template>

<style lang="scss" scoped></style>
