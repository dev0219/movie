import { shallowMount } from '@vue/test-utils';
import ViewDescription from '@/components/ViewDescription.vue';

describe('ViewDescription.vue', () => {
  it('displays movie description when showDescription is true', async () => {
    const movie = {
      id: 1,
      title: "Movie 1",
      image: "https://placehold.co/300x200",
      genre: "Action",
      releaseDate: "2022-01-01",
      imdbRating: 7.5,
      description: "This is the description for Movie 1.",
    };

    const wrapper = shallowMount(ViewDescription, {
      props: {
        movie,
      },
    });

    // Click the button to toggle description
    await wrapper.find('button').trigger('click');

    // Check if description is displayed after clicking the button
    expect(wrapper.find('.movie-description p').text()).toBe(movie.description);
  });

  it('toggles description visibility when button is clicked', async () => {
    const movie = {
      id: 2,
      title: "Movie 2",
      image: "https://placehold.co/300x200",
      genre: "Romance",
      releaseDate: "2022-02-15",
      imdbRating: 8.0,
      description: "This is the description for Movie 2.",
    };

    const wrapper = shallowMount(ViewDescription, {
      props: {
        movie,
      },
    });

    // Initial state
    expect(wrapper.vm.showDescription).toBe(false);

    // Click the button to show description
    await wrapper.find('button').trigger('click');

    // Check if showDescription is true after clicking the button
    expect(wrapper.vm.showDescription).toBe(true);

    // Click the button again to hide description
    await wrapper.find('button').trigger('click');

    // Check if showDescription is false after clicking the button again
    expect(wrapper.vm.showDescription).toBe(false);
  });
});