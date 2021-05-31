import { RootState } from "..";

export const getContentData = (state: RootState) => [...state.content.data, ...state.content.tabs];
export const getError = (state: RootState) => state.content.error;