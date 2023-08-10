import { mount } from "@vue/test-utils";
import ViewDescription from "@/components/ViewDescription.vue";

describe("ViewDescription Component", () => {
  it("displays 'View Description' button", () => {
    const wrapper = mount(ViewDescription, {
      propsData: {
        movie: {
          id: null,
          title: "",
          image: "",
          genre: "",
          releaseDate: "",
          imdbRating: null,
          description: "",
        },
      },
    });

    const viewDescriptionButton = wrapper.find("button");
    expect(viewDescriptionButton.text()).toBe("View Description");
  });

  it("toggles movie description when button is clicked", async () => {
    const movie = {
      id: 1,
      title: "Movie 1",
      image: "https://placehold.co/300x200",
      genre: "Action",
      releaseDate: "2022-01-01",
      imdbRating: 7.5,
      description: "This is the description for Movie 1.",
    };
    const wrapper = mount(ViewDescription, {
      propsData: { movie },
    });

    await wrapper.find("button").trigger("click");
    expect(wrapper.vm.showDescription).toBe(true);

    await wrapper.find("button").trigger("click");
    expect(wrapper.vm.showDescription).toBe(false);
  });
});

// /// ViewDescription Component
// describe("ViewDescription Component", () => {
//   it("should display 'View Description' button under movie details", () => {
//     // Test if the component displays the 'View Description' button under movie details.
//     // Vue.js Code: Use <button> tag to create the button element.
//     // Interaction: User sees the 'View Description' button under movie details.
//   });

//   it("should hide(with movie description being set to false in the movie array)movie description initially", () => {
//     // Test if the movie description is not visible initially with true and false test.
//     // Vue.js Code: by default the description value is false when clicked it becomes true.
//   });
// //
// //
// //
//   it("should show movie description from the array in props.movie-details when 'View Description' is clicked using $emit to toggle description visibility", () => {
//     // Test if clicking the "View Description" button emits a custom event to show the movie's description.
//     // Vue.js Code: Use a button with '@click' directive to emit a custom event.
//     // Interaction: User clicks the button to view the movie's description.
//   });

//   it("updates movie suggestion when a genre is clicked again", () => {
//     // Test if clicking a genre again updates the movie suggestion.
//     // Vue.js Code: Simulate clicking a genre, then clicking it again to trigger an updated movie suggestion.
//     // Interaction: Clicking the same genre again should result in a different movie suggestion.
//   });
// });
