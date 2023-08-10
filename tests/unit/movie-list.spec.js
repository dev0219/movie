import { mount } from "@vue/test-utils";
import MovieList from "@/components/MovieList.vue";
import MovieDetails from "@/components/MovieDetails.vue";

describe("MovieList Component", () => {
  it("displays multiple MovieDetails components", () => {
    const movies = [
      // Your sample movie data here
    ];
    const wrapper = mount(MovieList, {
      propsData: { movies },
    });

    const movieDetails = wrapper.findAllComponents(MovieDetails);
    expect(movieDetails).toHaveLength(movies.length);
  });
});

// // MovieList Component
// describe("MovieList Component", () => {
//   it("should display three MovieDetails components stacked on top of each other", () => {
//     // Test if the MovieList component displays three MovieDetails components stacked on top of each other.
//     // Vue.js Code: Use v-for directive to render three MovieDetails components.
//     // Interaction: User sees three movie details components stacked.
//   });
// });
