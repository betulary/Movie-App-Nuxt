<template>
  <div>
    <div class="container">
      <div class="movie-detail flex flex-col px-4 py-16 mx-auto md:flex-row justify-center">
        <div class="detail-poster">
            <img :src="`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`" class="w-70">
        </div>
        <div class="detail-top flex items-center">
          <div class="movie-title md:ml-24">
            <h1 class="mt-4 text-4xl font-semibold md:mt-0 text-white">{{ movie.title }}</h1>
            <div class="release mt-2">
              <div class="genres">
                <div class="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
                  <svg class="w-4 text-gray-700 fill-current text-myyellow" viewBox="0 0 24 24">
                      <g data-name="Layer 2">
                      <path
                          d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
                          data-name="star"
                      />
                      </g>
                  </svg>
                  <span class="ml-1">{{ (movie.vote_average * 10).toFixed(2) }}%</span>
                  <span class="mx-2">|</span>
                  <span class="movie-date">{{ movie.release_date || movie.first_air_date }}</span>
                  <svg class="w-4 ml-4 text-gray-700 fill-current text-white" viewBox="0 0 24 24" @click="removeFavorite(movie)" v-if=isFavorite(movie)>
                    <path d="m11.2 20-.5-.5-8.9-9.2c-1-1.1-1.8-2.4-1.8-4.2 0-3.4 2.7-6.1 6.1-6.1 2.1 0 4.1 1.1 5.2 2.9 1-1.8 2.9-2.9 5.1-2.9 3.4 0 6.1 2.7 6.1 6.1 0 1.9-.8 3.1-1.8 4.2z"
                    class="heart-filled text-myyellow"
                    />
                  </svg>
                  <svg class="w-4 ml-4 text-gray-700 fill-current text-white" viewBox="0 0 24 24" @click="addFavorite(movie)" v-if=!isFavorite(movie)>
                      <path d="m11.2 20-.5-.5-8.9-9.2c-1-1.1-1.8-2.4-1.8-4.2 0-3.4 2.7-6.1 6.1-6.1 2.1 0 4.1 1.1 5.2 2.9 1-1.8 2.9-2.9 5.1-2.9 3.4 0 6.1 2.7 6.1 6.1 0 1.9-.8 3.1-1.8 4.2z"
                      />
                  </svg>
                </div>
                <h4 class="text-gray-500 mt-2">Time: {{ movie.runtime | movie_time }} </h4>
                <div class="flex flex-row mt-2">
                  <h4 class="flex justify-center items-center text-gray-500">Genre: </h4>
                  <ul class="text-gray-500 flex flex-row gap-2">
                    <li class="genres-li" v-for="genre in genres" :key="genre.id">{{ genre.name }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useCounterStore } from '../store/counter';

const url = "https://api.themoviedb.org/3/";
const api_key = "95161c2d4f265bc1dea3dcdd2ba31371";

export default {
  data() {
    return {
      movie: {},
      trailer: false,
      isLoading: true
    };
  },
  async created() {
    this.fetchMovieDetail();
  },
  methods: {
    ...mapActions(useCounterStore, ['addMovieToFavorite', 'removeMovieFromFavorite']),
    async fetchMovieDetail() {
      try {
        const response = await fetch(`${url}movie/${this.$route.params.id}?api_key=${api_key}&language=en-US`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.movie = data;
        this.isLoading = false;
      } catch (err) {
        console.error('Error fetching data:', err);
        this.isLoading = false;
      }
    },
    addFavorite(movie) {
      this.addMovieToFavorite(movie);
    },
    removeFavorite(movie) {
      this.removeMovieFromFavorite(movie);
    },
    isFavorite(movie) {
      return this.favorites.some((m) => m.id === movie.id) || false;
    }
  },
  computed: {
    ...mapState(useCounterStore, ['favorites']),
    genres() {
      return this.movie.genres ? this.movie.genres : [];
    }
  },
};
</script>
