<script>
import HomeCard from '../components/HomeCard.vue';
import SearchBar from '../components/SearchBar.vue';

export default {
    name: 'Home',
    components: {
        SearchBar,
        HomeCard,
    },
    data() {
        return {
            movies: [],
        }
    },
    mounted() {
        fetch(
                `https://api.themoviedb.org/3/movie/top_rated?api_key=348088421ad3fb3a9d6e56bb6a9a8f80&language=en-US&page=1`
            )
            .then((response) => response.json())
            .then((data) => (this.movies = data.results))
            .catch((error) => console.log(error));
    },
};
</script>

<template>
    <div class="home">
        <SearchBar />
        <div class="popular-movie-header text-lg flex justify-start p-6 text-white">POPULAR</div>
        <HomeCard :movies="movies"></HomeCard>
    </div>
</template>