import { MenuItemTypes } from "store/menu/enums";

export enum RequestMethods {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
  OPTIONS = "OPTIONS",
  DELETE = "DELETE",
  PUT = "PUT",
}

export enum ActionTypes {
  text = "text",
  left_menu = "left_menu",
  get = "get",
}

export enum EntityTypes {
  content = "menu_data",
  tabs = "tabs_data",
  text = "text",
  system_view = "system_view",
}

export enum TabCodes {  
  tab1 = "blank_tab1",  
  tab2 = "blank_tab2",
  tab3 = "blank_tab3",
}

export type RequestCodes = MenuItemTypes & TabCodes;
