<template>
    <nav class="main-nav text-sm flex gap-10 justify-start bg-gray-800 p-6 text-white">
      <NuxtLink to="/">
        <img class= "w-11 ml-4" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg">
      </NuxtLink>
      <div class="relative h-12" @mouseover="showMoviesDropdown = true" @mouseleave="showMoviesDropdown = false">
        <span class="cursor-pointer">Movies</span>
        <div v-if="showMoviesDropdown" class="absolute z-10 bg-white p-2 shadow-md rounded top-full mt-1 text-gray-900 w-11 px-3">
          <NuxtLink to="/Movies" class="block mb-1">All Movies</NuxtLink>
          <NuxtLink to="/Movies?filter=top_rated" class="block">Top Rated</NuxtLink>
          <NuxtLink to="/Movies?filter=popular" class="block">Popular</NuxtLink>
        </div>
      </div>
      <div class="relative h-12" @mouseover="showTvShowsDropdown = true" @mouseleave="showTvShowsDropdown = false">
        <span class="cursor-pointer">Tv Shows</span>
        <div v-if="showTvShowsDropdown" class="absolute z-10 bg-white p-2 shadow-md rounded top-full mt-1 text-gray-900 w-11 px-3">
          <NuxtLink to="/TvShows" class="block mb-1">All Tv Shows</NuxtLink>
          <NuxtLink to="/TvShows?filter=top_rated" class="block">Top Rated</NuxtLink>
          <NuxtLink to="/TvShows?filter=popular" class="block">Popular</NuxtLink>
        </div>
      </div>
    </nav>
</template>
  
<script>
    export default {
        data() {
            return {
            showMoviesDropdown: false,
            showTvShowsDropdown: false,
            };
        },
    };
</script>
  