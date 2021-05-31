import { PayloadAction } from "@reduxjs/toolkit";
import { ContentBlockData, ContentState } from "./types";

const reducers = {
  setContentData: (state: ContentState, action: PayloadAction<ContentBlockData[]>) => {
    state.data = action.payload;
  },
  setTabData: (state: ContentState, action: PayloadAction<ContentBlockData[]>) => {
    state.tabs = action.payload;
  },
  setError: (state: ContentState, action: PayloadAction<string>) => {
    state.error = action.payload;
  }
};

export default reducers;
