<template>
  <div class="genre-selector">
    <p>Select a Genre:</p>
    <ul>
      <li v-for="genre in genres" :key="genre" @click="selectGenre(genre)">
        {{ genre }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "GenreSelector",
  props: {
    genres: {
      type: Array,
      required: true,
    },
    selectedGenre: String, // Pass the selected genre as a prop
    selectGenre: Function, // Pass the selectGenre function as a prop
  },
};
</script>

<style scoped>
/* Your styles here */
</style>
