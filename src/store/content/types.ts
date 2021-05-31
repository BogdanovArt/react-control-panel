import { TabCodes } from "types/enums";
import { BlockTypes, VisualBlockTypes } from "./enums";

export interface ContentState {
  data: ContentBlockData[];
  tabs: ContentBlockData[];
  error: string;
}

interface ContentBlock {
  type: BlockTypes;
  name?: string;
}

export type ContentBlockData =
  | VisualDataBlock
  | ClientDataBlock
  | TabsDataBlock
  | ContentBlock;

export interface VisualDataBlock extends ContentBlock {
  blocks: VisualDataContentBlock[];
}

export type VisualDataContentBlock = AccordionDataBlock | BricksDataBlock;

interface DataBlock {
  name: string;
  description: string;
  order: number;
}

export interface AccordionDataBlock extends DataBlock {
  type: VisualBlockTypes.accordion;
  elements: Array<AccordionItem>;
}

export interface BricksDataBlock extends DataBlock {
  type: VisualBlockTypes.bricks;
  elements: Array<BricksItem>;
}

export interface BricksItem  {
  name: string
  name2: string
  url: string
  order: number
}

export type TabsDataBlock = TabsStatic & TabsDynamic;

export interface TabsStatic extends ContentBlock {
  default: string;
}

export interface TabsDynamic {
  [key: string]: TabContent;
}

export interface TabContent {
  name: string;
  icon: string;
  code: TabCodes;
  visible: boolean;
}

export interface ClientDataBlock extends ContentBlock {
  name_inn: string;
  value_inn: string;
  name_admin: string;
  value_admin: string;
  name_tel: string;
  value_tel: string;
}

export interface AccordionItem {
  name: string;
  column_qty: number;
  order: number;
  rows: Array<AccordionRow>;
  expand: boolean;
}

export interface AccordionRow {
  order: number;
  [key: string]: string | number;
}
