import { ExpandableList } from "./blocks";

import { AccordionDataBlock, AccordionItem } from "store/content/types";
import { sorter } from "store/menu/utils";

import styles from "./Accordion.module.scss";

const renderElements = (items: AccordionItem[]) => {
  return items
    .sort(sorter)
    .map((item, index) => <ExpandableList key={item.name + index} item={item} />);
};

export function AccordionBlock({ block }: { block: AccordionDataBlock }) {
  const elements =
    block.elements && block.elements.length ? [...block.elements] : [];
  return (
    <div className={styles.AccordionBlock}>
      <div className={styles.AccordionBlockHeading}>
        <div className={styles.AccordionBlockTitle}>{block.name}</div>
        {/* <div className={styles.AccordionBlockControls}>
          <Icon id="upload" />
          <Icon id="copy" />
        </div> */}
      </div>
      {renderElements(elements)}
    </div>
  );
}
