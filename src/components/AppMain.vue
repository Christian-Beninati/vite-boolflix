<script>

// Importa la variabile store dal file store.js
export default {
    data() {
        return {
            imageBaseUrl: 'https://image.tmdb.org/t/p/w342',
        }
    },
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
        },

        coverImagePath(posterPath) {
            if (posterPath) {
                return this.imageBaseUrl + posterPath;
            } else {
                return '';
            }
        },
        getRatingStars(vote) {
            const roundedRating = Math.ceil(vote / 2);
            const fullStars = roundedRating;
            const emptyStars = 5 - roundedRating;

            return {
                fullStars: Array(fullStars).fill("fa-solid fa-star"),
                emptyStars: Array(emptyStars).fill("fa-regular fa-star"),
            };
        },

    }
};
</script>

<template>
    <main>
        <section id="films">
            <h1>Films</h1>
            <ul>
                <li v-for="movie in movies" :key="movie.id">
                    <img :src="coverImagePath(movie.poster_path)" :alt="movie.title" />
                    <h3>{{ movie.title }}</h3>
                    <p>{{ movie.original_title }}</p>
                    <template v-if="hasFlagLanguage(movie.original_language)">
                        <img :src="flagImagePath(movie.original_language)" :alt="movie.original_language" />
                    </template>
                    <template v-else>
                        <p>{{ movie.original_language }}</p>
                    </template>
                    <!-- star rating -->
                    <div>
                        <i v-for="starClass in getRatingStars(movie.vote_average).fullStars" :key="starClass"
                            :class="starClass"></i>
                        <i v-for="starClass in getRatingStars(movie.vote_average).emptyStars" :key="starClass"
                            :class="starClass"></i>
                    </div>
                </li>
            </ul>
        </section>

        <section id="series">
            <h1>Series</h1>
            <ul>
                <li v-for="serie in series" :key="serie.id">
                    <img :src="coverImagePath(serie.poster_path)" :alt="serie.name" />
                    <h3>{{ serie.name }}</h3>
                    <p>{{ serie.original_name }}</p>
                    <template v-if="hasFlagLanguage(serie.original_language)">
                        <img :src="flagImagePath(serie.original_language)" :alt="serie.original_language" />
                    </template>
                    <template v-else>
                        <p>{{ serie.original_language }}</p>
                    </template>
                    <!-- star rating -->
                    <div>
                        <i v-for="starClass in getRatingStars(serie.vote_average).fullStars" :key="starClass"
                            :class="starClass"></i>
                        <i v-for="starClass in getRatingStars(serie.vote_average).emptyStars" :key="starClass"
                            :class="starClass"></i>
                    </div>
                </li>
            </ul>
        </section>
    </main>
</template>

<style lang="scss" scoped></style>
