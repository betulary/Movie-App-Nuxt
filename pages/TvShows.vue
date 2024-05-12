<template>
    <div>
      <div class="flex flex-col justify-start p-6 border-20 w-275">
        <select class="mt-2 inp max-w-15 border-5" v-model="selectedFilter" @change="updateFilter">
          <option value="">Popular</option>
          <option value="top_rated">Top Rated</option>
        </select>
      </div>
      <div class="popular-movie-header text-lg flex justify-start p-6 text-white">TV SHOWS</div>
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
        tvShows: [],
        selectedFilter: '',
      };
    },
    computed: {
      filteredMovies() {
        if (this.selectedFilter === 'top_rated') {
          return this.tvShows.slice().sort((a, b) => b.vote_average - a.vote_average);
        } else {
          return this.tvShows;
        }
      },
    },
    mounted() {
      this.fetchTvShows();
    },
    watch: {
      selectedFilter() {
        this.filterTvShows();
      },
    },
    methods: {
      fetchTvShows() {
        const filterParam = this.$route.query.filter;

        if (filterParam) {
          this.selectedFilter = filterParam;
        }
        
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=348088421ad3fb3a9d6e56bb6a9a8f80&language=en-US&page=1`)
          .then((response) => response.json())
          .then((data) => {
            this.tvShows = data.results;
            this.filterTvShows();
          })
          .catch((error) => console.log(error));
        },
      filterTvShows() {
        
      },
      updateFilter() {
        const path = this.$route.path;
        const query = this.selectedFilter ? `?filter=${this.selectedFilter}` : '';
        this.$router.push(`${path}${query}`);
      },
    },
  };
</script>
