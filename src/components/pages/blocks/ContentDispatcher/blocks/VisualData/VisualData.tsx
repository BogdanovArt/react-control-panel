import { AccordionBlock, BricksBlock } from "./blocks";

import { VisualBlockTypes } from "store/content/enums";
import { VisualDataBlock, VisualDataContentBlock } from "store/content/types";

import styles from "./VisualData.module.scss";
import { sorter } from "store/menu/utils";

const renderVisualBlocks = (blocks: VisualDataContentBlock[]) => {
  return blocks.sort(sorter).map((block, index) => {
    switch (block.type) {
      case VisualBlockTypes.accordion:
        return <AccordionBlock key={index} block={block} />;
      case VisualBlockTypes.bricks:
        return <BricksBlock key={index} block={block} />;
      default:
        return null;
    }
  });
};

export function VisualData({ item }: { item: VisualDataBlock }) {
  const blocks = [...item.blocks];
  return <div className={styles.VisualData}>{renderVisualBlocks(blocks)}</div>;
}
