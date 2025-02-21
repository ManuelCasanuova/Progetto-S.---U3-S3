import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  tracks: tracksReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
