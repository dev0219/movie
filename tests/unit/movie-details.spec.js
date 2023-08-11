import { shallowMount } from '@vue/test-utils';
import MovieDetails from '@/components/MovieDetails.vue';

describe('MovieDetails.vue', () => {
  it('displays movie details', () => {
    const movie = {
      id: 1,
      title: "Movie 1",
      image: "https://placehold.co/300x200",
      genre: "Action",
      releaseDate: "2022-01-01",
      imdbRating: 7.5,
      description: "This is the description for Movie 1.",
    };

    const wrapper = shallowMount(MovieDetails, {
      props: {
        movie,
      },
    });

    // Check if movie details are displayed
    expect(wrapper.find('.movie-details').exists()).toBe(true);
  });
});