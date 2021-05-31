/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { MenuIcon } from "components/menu/blocks/MenuItem/MenuIcon/MenuIcon";

import { requestContentData } from "store/content/actions";
import { TabContent, TabsDataBlock } from "store/content/types";
import { RequestPayloadOptions } from "types";

import styles from "./Tabs.module.scss";
import { EntityTypes } from "types/enums";

const renderTabs = (
  tabs: TabContent[],
  active: TabContent,
  action: (tab: TabContent) => void
) => {
  return tabs.map((tab, index) => {
    const isActive = active.code === tab.code;
    return (
      <div key={index} className={styles.TabsItem} onClick={() => action(tab)}>
        <div
          className={[
            styles.TabsItemWrapper,
            isActive ? styles.Active : "",
          ].join(" ")}
        >
          {tab.icon && (
            <div className={styles.TabsIcon}>
              <MenuIcon icon={tab.icon} name={tab.name} active={isActive} />
            </div>
          )}
          <div className={styles.TabsItemTitle}>{tab.name}</div>
        </div>
      </div>
    );
  });
};

export function Tabs({ item }: { item: TabsDataBlock }) {
  const tabs = [item.tab1, item.tab2, item.tab3].filter((tab) => tab.visible);
  const defaultTab = item[item.default];

  const dispatch = useDispatch();
  const [active, setActive] = useState<TabContent>(defaultTab);

  const setTab = (tab: TabContent) => {
    setActive(tab);
  };

  useEffect(() => {
    setActive(item[item.default]);
  }, [item]);

  useEffect(() => {
    const pl = { code: active.code } as RequestPayloadOptions;
    dispatch(requestContentData(pl, EntityTypes.tabs));
  }, [active]);

  return (
    <div className={styles.Tabs}>
      <div className={styles.TabsHeading}>{item.name}</div>
      <div className={styles.TabsItems}>{renderTabs(tabs, active, setTab)}</div>
    </div>
  );
}
