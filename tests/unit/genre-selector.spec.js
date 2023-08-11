import { shallowMount } from '@vue/test-utils';
import GenreSelector from '@/components/GenreSelector.vue';

describe('GenreSelector.vue', () => {
  it('displays genres', () => {
    const genres = ['Action', 'Romance', 'Comedy', 'Drama'];
    const selectedGenre = 'Action';
    const selectGenre = jest.fn();

    const wrapper = shallowMount(GenreSelector, {
      props: {
        genres,
        selectedGenre,
        selectGenre,
      },
    });

    // Check if genres are displayed
    const genreItems = wrapper.findAll('li');
    expect(genreItems.length).toBe(genres.length);

    // Verify the displayed genre texts
    genreItems.forEach((genreItem, index) => {
      expect(genreItem.text()).toBe(genres[index]);
    });
  });

  it('triggers selectGenre on click', async () => {
    const genres = ['Action', 'Romance', 'Comedy', 'Drama'];
    const selectedGenre = 'Action';
    const selectGenre = jest.fn();

    const wrapper = shallowMount(GenreSelector, {
      props: {
        genres,
        selectedGenre,
        selectGenre,
      },
    });

    // Simulate clicking on each genre
    const genreItems = wrapper.findAll('li');
    for (let index = 0; index < genres.length; index++) {
      await genreItems.at(index).trigger('click');
      expect(selectGenre).toHaveBeenCalledWith(genres[index]);
    }
  });
});