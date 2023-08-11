import { shallowMount } from '@vue/test-utils';
import GenreSelector from '@/components/GenreSelector.vue';

describe('GenreSelector.vue', () => {
  it('displays genres and triggers selectGenre on click', async () => {
    const genres = ['Action', 'Romance', 'Comedy', 'Drama'];
    const selectedGenre = 'action';
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

    // Simulate clicking on a genre
    await genreItems.at(1).trigger('click');

    // Check if selectGenre function was called with the correct genre
    expect(selectGenre).toHaveBeenCalledWith('Romance');
  });
});