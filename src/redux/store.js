import { configureStore } from "@reduxjs/toolkit";
import covidSlicer from "./covidSlicer";

export const store = configureStore({
  reducer: {
    covid: covidSlicer,
  },
});
