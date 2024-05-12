<template>
    <div>
      <div class="flex flex-col justify-start p-6 border-20 w-275">
        <select class="mt-2 inp max-w-15 border-5" v-model="selectedFilter">
          <option value="">Popular</option>
          <option value="top_rated">Top Rated</option>
        </select>
      </div>
      <div class="popular-movie-header text-lg flex justify-start p-6 text-white">MOVIES</div>
      <div class="flex flex-col">
        <MovieCard :movies="filteredMovies"></MovieCard>
      </div>
    </div>
  </template>
  
  <script>
  import MovieCard from '../components/MovieCard.vue';
  export default {
    components: {
      MovieCard,
    },
    data() {
      return {
        movies: [],
        selectedFilter: '',
      };
    },
    computed: {
      filteredMovies() {
        if (this.selectedFilter === 'top_rated') {
          return this.movies.slice().sort((a, b) => b.vote_average - a.vote_average);
        } else {
          return this.movies;
        }
      },
    },
    mounted() {
      this.fetchMovies();
    },
    watch: {
      selectedFilter() {
        this.filterMovies();
      },
    },
    methods: {
      fetchMovies() {
        const filterParam = this.$route.query.filter;

        if (filterParam) {
          this.selectedFilter = filterParam;
        }
        
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=348088421ad3fb3a9d6e56bb6a9a8f80&language=en-US&page=1`)
          .then((response) => response.json())
          .then((data) => {
            this.movies = data.results;
            this.filterMovies();
          })
          .catch((error) => console.log(error));
      },
      filterMovies() {},
    },
  };
  </script>
  