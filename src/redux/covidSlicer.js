import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchGlobal = createAsyncThunk("covid/fetchGlobal", async () => {
  const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}`);
  return res.data;
});

export const fetchCountry = createAsyncThunk(
  "covid/fetchCountry",
  async (country) => {
    const res = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}countries/${country}`
    );
    return res.data;
  }
);

export const quotesSlice = createSlice({
  name: "covid",
  initialState: {
    items: [],
    status: "idle",
    error: "",
  },
  reducers: {},
  extraReducers: {
    [fetchGlobal.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchGlobal.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "succeeded";
    },
    [fetchGlobal.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [fetchCountry.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchCountry.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "succeeded";
    },
    [fetchCountry.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const itemsSelector = (state) => state.quotes.items;
export const statusSelector = (state) => state.quotes.status;
export const errorSelector = (state) => state.quotes.error;

export default quotesSlice.reducer;
