import { BricksDataBlock, BricksItem } from "store/content/types";
import { sorter } from "store/menu/utils";

import styles from "./Bricks.module.scss";

const renderElements = (items: BricksItem[]) => {
  return items.sort(sorter).map((item, index) => (
    <div key={index} className={styles.BricksBlockItem}>
      <div className={styles.BricksBlockItemTitle}>{item.name}</div>
      <div className={styles.BricksBlockItemDate}>{item.name2}</div>
      {item.url && (
        <div className={styles.BricksBlockItemLink}>
          <a href={item.url} target="_blank" rel="noreferrer">
            <img src="svg/upload.svg" alt="upload icon"/>
          </a>
        </div>
      )}
    </div>
  ));
};

export function BricksBlock({ block }: { block: BricksDataBlock }) {
  const elements =
    block.elements && block.elements.length ? [...block.elements] : [];

  return (
    <div className={styles.BricksBlock}>
      <div className={styles.BricksBlockHeading}>
        <div className={styles.BricksBlockTitle}>{block.name}</div>
      </div>
      <div className={styles.BricksBlockContent}>
        {renderElements(elements)}
      </div>
    </div>
  );
}
