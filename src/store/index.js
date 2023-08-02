import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/SongsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/MoviesSlice";


const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer
  }
});

export { store };
export { addSong, removeSong, addMovie, removeMovie };
