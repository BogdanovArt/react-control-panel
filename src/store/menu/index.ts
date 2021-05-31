import { createSlice } from "@reduxjs/toolkit";

import { MenuState } from "./types";
import reducers from './reducers';

const initialState: MenuState = {
  data: [],
  active: null,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers,
});

export const { setMenuData, setActiveItem } = menuSlice.actions;

export default menuSlice.reducer;
