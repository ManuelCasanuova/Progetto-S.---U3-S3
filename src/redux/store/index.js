import { combineReducers, configureStore } from "@reduxjs/toolkit";

import selectedTrackReducer from "../reducers/selectReducer";
import favoritesReducer from "../reducers/favoriteReducer";

const rootReducer = combineReducers({
  selectedTrack: selectedTrackReducer,
  favorite: favoritesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
