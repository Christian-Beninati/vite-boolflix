<script>

// Importa la variabile store dal file store.js
export default {
    data() {
        return {
            imageBaseUrl: 'https://image.tmdb.org/t/p/w342',
            placeholder: 'https://marcolanci.it/utils/poster-placeholder.png',
            showInfo: false,
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
                return this.placeholder;
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
        <section id="films" class="container" v-if="movies.length > 0">
            <h2 class="mt-5">Films</h2>
            <ul class="card-container">
                <li v-for="movie in movies" :key="movie.id" class="card" @mouseover="showInfo = movie.id"
                    @mouseout="showInfo = null">

                    <!-- Cover Image Path -->
                    <img :src="coverImagePath(movie.poster_path)" :alt="movie.title" />

                    <!-- Movie Info -->
                    <div class="movie-info-wrapper text-center" v-show="showInfo === movie.id">
                        <h3>{{ movie.title }}</h3>
                        <p>{{ movie.original_title }}</p>
                        <template v-if="hasFlagLanguage(movie.original_language)">
                            <img class="img-flag" :src="flagImagePath(movie.original_language)"
                                :alt="movie.original_language" />
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
                    </div>

                </li>
            </ul>
        </section>

        <section id="series" class="container" v-if="series.length > 0">
            <h2>Series</h2>
            <ul class="card-container">
                <li v-for="serie in series" :key="serie.id" class="card" @mouseover="showInfo = serie.id"
                    @mouseout="showInfo = null">

                    <!-- Cover Image Path -->
                    <img :src="coverImagePath(serie.poster_path)" :alt="serie.name" />

                    <!-- Movie Info -->
                    <div class="movie-info-wrapper text-center" v-show="showInfo === serie.id">
                        <h3>{{ serie.name }}</h3>
                        <p>{{ serie.original_name }}</p>
                        <template v-if="hasFlagLanguage(serie.original_language)">
                            <img class="img-flag" :src="flagImagePath(serie.original_language)"
                                :alt="serie.original_language" />
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
                    </div>
                </li>
            </ul>
        </section>
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/vars' as *;
@use '../assets/scss/mixins' as *;


main {
    height: calc(100vh - 100px);
    background-color: $grey;
    overflow-y: auto;
}

.card-container {
    @include flexbox(start, stretch, row, wrap);
    padding: 60px 0;
    gap: 20px;
}

.card {
    flex-basis: calc(100% / 4 - 15px);
    cursor: pointer;
    position: relative;
    border: 0;
}

.movie-info-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
}



.img-flag {
    width: 100px;
    padding-bottom: 10px;
}
</style>
