import { combineReducers, configureStore } from "@reduxjs/toolkit";

import selectedTrackReducer from "../reducers/selectReducer";
import favoritesReducer from "../reducers/favoriteReducer";
import searchReducer from "../reducers/formValueReducer";

const rootReducer = combineReducers({
  selectedTrack: selectedTrackReducer,
  favorite: favoritesReducer,
  search: searchReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
