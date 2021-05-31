import { MenuItemTypes } from "./enums";

export interface MenuState {
  data: MenuStateData;
  active: MenuItemSchema | null;
}

export interface MenuItemSchema {
  name: string;
  code: MenuItemTypes;
  description: string;
  icon: string | null;
  order: number;
  parent: MenuItemTypes | null;
  children: MenuItemSchema[];
  clickable: boolean;
}

export type MenuStateData = MenuItemSchema[];
