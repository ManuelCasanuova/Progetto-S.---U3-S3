import { combineReducers, configureStore } from "@reduxjs/toolkit";
import selectedTrackReducer from "../reducers/selectReducer";
import favoritesReducer from "../reducers/favoriteReducer";
import artistSongsReducer from "../reducers/artistSongsReducer";
import searchReducer from "../reducers/searchReducer";

const rootReducer = combineReducers({
  selectedTrack: selectedTrackReducer,
  favorite: favoritesReducer,
  search: searchReducer,
  artistSongs: artistSongsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
