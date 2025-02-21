import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tracksReducer from "../reducers/Index";

const rootReducer = combineReducers({
  tracksImported: tracksReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
