# pierre-app Outline

1. App.vue
   - Houses the entire application.
   - Imports and renders the following components:
     - RecommendButton
     - GenreSelector
     - MovieDetails

2. RecommendButton.vue
   - Displays a "Recommend" button.
   - Handles button clicks to trigger genre selection and movie recommendation.
   - Emits events to communicate with other components.

3. GenreSelector.vue
   - Displays "Pick a Genre" text and a dropdown menu with genre options:
     - Action
     - Romance
     - Comedy
     - Drama
     - Science Fiction
     - Handles genre selection and emits the selected genre.

4. MovieDetails.vue
   - Displays movie details after genre selection:
     - Movie Name
     - Genre
     - Release Date
     - IMDB Rating
   - Includes a "View Description" button to reveal the movie's description.

5. ViewDescription.vue
   - Displays a "View Description" button.
   - Handles button clicks to reveal the movie's description.
   - Shows the movie's description when the button is clicked.

6. Flow
   - User loads the app.
   - Clicks the "Recommend" button in the RecommendButton component.
   - GenreSelector component becomes visible after the first click.
   - User selects a genre from the dropdown menu in the GenreSelector component.
   - RecommendButton component triggers the GenreSelector to generate a random movie suggestion based on the selected genre.
   - MovieDetails component displays the details of the recommended movie, including name, genre, release date, and IMDB rating.
   - "View Description" button becomes visible under the movie details.
   - User clicks the "View Description" button to reveal the movie's description.
   - User can repeat the process by clicking the "Recommend" button again and selecting a different genre.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
