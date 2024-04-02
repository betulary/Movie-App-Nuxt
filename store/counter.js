
export const useCounterStore = defineStore('counter', {
    state: () => ({ favorites: [] }),
    getters: {
        getFavoriteMovies: (state) => state.favorites,
    },
    actions: {
        addMovieToFavorite(movie) {
            this.favorites.push(movie);
        },
        removeMovieFromFavorite(movie) {
            this.favorites = this.favorites.filter((m) => m.id !== movie.id);
        },
    },
});
