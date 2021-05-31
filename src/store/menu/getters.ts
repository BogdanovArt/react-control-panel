import { RootState } from "..";

export const getMenu = (state: RootState) => state.menu.data;
export const getActiveItem = (state: RootState) => state.menu.active;
export const getActiveGroup = (state: RootState) => state.menu.active?.parent || state.menu.active?.code;