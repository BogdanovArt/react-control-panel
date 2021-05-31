import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import menuReducer from "./menu";
import contentReducer from "./content";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    content: contentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
