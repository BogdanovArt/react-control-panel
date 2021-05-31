import { useEffect, useRef, useState } from "react";
import Linkify from "react-linkify";

import { AccordionItem, AccordionRow } from "store/content/types";
import { sorter } from "store/menu/utils";

import styles from "./ExpandableList.module.scss";

const renderColumns = (row: AccordionRow, total = 0) => {
  const columns: JSX.Element[] = [];
  for (let i = 0; i < total; i++) {
    columns.push(
      <div key={i} className={styles.ExpandableListColumn}>
        <Linkify
          componentDecorator={(decoratedHref, decoratedText, key) => (
            <a target="blank" href={decoratedHref} key={key}>
              {decoratedText}
            </a>
          )}
        >
          {row["col_" + (i + 1)]}
        </Linkify>
      </div>
    );
  }
  return columns;
};

const renderList = (items: AccordionRow[], total = 0) => {
  return items.sort(sorter).map((item, index) => (
    <div
      key={index}
      className={styles.ExpandableListRow}
      style={{ gridTemplateColumns: `repeat(${total}, ${100 / total}%)` }}
    >
      {renderColumns(item, total)}
    </div>
  ));
};

export function ExpandableList({ item }: { item: AccordionItem }) {
  const dimension = 48;
  const [opened, setOpened] = useState(item.expand);
  const [height, setHeight] = useState(dimension);
  const rows = [...item.rows];

  const content = useRef<HTMLDivElement>(null);

  const toggle = (state: boolean) => {
    setHeight(
      state ? (content?.current?.scrollHeight || 0) + dimension + 15 : 48
    );
  };

  useEffect(() => {
    toggle(opened);
  }, [opened]);

  return (
    <div
      className={[styles.ExpandableList, styles.Collapsed].join(" ")}
      style={{ height }}
    >
      <div
        className={styles.ExpandableListHeading}
        onClick={() => setOpened(!opened)}
      >
        <div className={styles.ExpandableListTitle}>{item.name}</div>
        <span>
          <img
            src="svg/chevron.svg"
            alt="chevron icon"
            className={[
              styles.ExpandableListIcon,
              opened ? styles.ExpandableListIconFlip : "",
            ].join(" ")}
          />
        </span>
      </div>
      <div ref={content} className={styles.ExpandableListContent}>
        {renderList(rows, item.column_qty)}
      </div>
    </div>
  );
}
