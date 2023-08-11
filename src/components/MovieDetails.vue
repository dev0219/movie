<template>
  <div class="movie-details">
    <div>
      <img :src="movie.image" alt="Movie Poster" />
      <h2>{{ movie.title }}</h2>
      <p>Genre: {{ movie.genre }}</p>
      <p>Release Date: {{ movie.releaseDate }}</p>
      <p>IMDB Rating: {{ movie.imdbRating }}</p>
      <ViewDescription :movie="movie"></ViewDescription>
    </div>
  </div>
</template>

<script>
import ViewDescription from "./ViewDescription.vue";

export default {
  name: "MovieDetails",
  components: {
    ViewDescription,
  },
  props: {
    movie: {
      type: Object,
      required: true,
    },
    selectedGenre: String,
  },
};
</script>

<style scoped>
/* Your styles here */
</style>
