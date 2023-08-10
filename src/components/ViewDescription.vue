<template>
  <div class="movie-description" v-if="showDescription">
    <p>{{ movie.description }}</p>
  </div>
  <button @click="toggleDescription">
    {{ showDescription ? "Hide Description" : "View Description" }}
  </button>
</template>

<script>
export default {
  name: "ViewDescription",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showDescription: false,
    };
  },
  methods: {
    toggleDescription() {
      this.showDescription = !this.showDescription;
    },
  },
};
</script>

<style scoped>
/* Your styles here */
</style>
