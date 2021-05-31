import { createSlice } from "@reduxjs/toolkit";

import { ContentState } from "./types";

import reducers from "./reducers";

const initialState: ContentState = {
  data: [],
  tabs: [],
  error: "",
};

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers,
});

export const { setContentData, setTabData, setError } = contentSlice.actions;

export default contentSlice.reducer;
