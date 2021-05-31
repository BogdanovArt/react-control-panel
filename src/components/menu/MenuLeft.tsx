import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { MenuItem } from "./blocks/MenuItem/MenuItem";

import { getActiveItem, getMenu } from "store/menu/getters";
import { requestMenuData } from "store/menu/actions";
import { setActiveItem } from "store/menu";
import { MenuItemSchema } from "store/menu/types";
import { requestContentData } from "store/content/actions";

import { RequestCodes } from "types/enums";

import styles from "./MenuLeft.module.scss";

export function MenuLeft() {
  const menu = useSelector(getMenu);
  const active = useSelector(getActiveItem);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestMenuData());
  }, []);

  const dispatchItemAction = async (item: MenuItemSchema) => {
    const code = item.code as RequestCodes;
    await dispatch(requestContentData({ code }));
    dispatch(setActiveItem(item));
  };

  const MenuItemAction = async (item: MenuItemSchema) => {
    if (item.code === active?.parent || item.code === active?.code) return;
    if (item.clickable) {
      dispatchItemAction(item);
    } else {
      const index = menu.findIndex((el) => el.code === item.code);
      if (index > -1 && menu[index + 1]) {
        dispatchItemAction(menu[index + 1]);
      }
    }
  };

  useEffect(() => {
    if (menu.length) MenuItemAction(menu[0]);
  }, [menu]);

  const renderItems = menu.map((item, ind) => (
    <MenuItem key={ind} item={item} action={MenuItemAction} active={active} />
  ));

  return (
    <div>
      <div className={styles.MenuLeftLogo}>
        <img src={'icons/main_logo.png'} alt=""/>
      </div>
      <div className={styles.MenuLeft}>{renderItems}</div>
    </div>
  );
}
