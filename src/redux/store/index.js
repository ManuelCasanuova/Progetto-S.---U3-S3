import { combineReducers, configureStore } from "@reduxjs/toolkit";

import selectedTrackReducer from "../reducers/selectReducer";
import favoritesReducer from "../reducers/favoriteReducer";
import searchReducer from "../reducers/formValueReducer";
import artistSongsReducer from "../reducers/artistSongsReducer";

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
