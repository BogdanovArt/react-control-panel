import { NameBlock, MailBlock, InfoBlock, VisualData, Tabs } from "./blocks";

import { BlockTypes } from "store/content/enums";
import {
  ClientDataBlock,
  ContentBlockData,
  VisualDataBlock,
  TabsDataBlock,
} from "store/content/types";

interface Props {
  block: ContentBlockData;
}

export function ContentDispatcher({ block }: Props) {
  const dispatcher = (block: ContentBlockData) => {
    switch (block.type) {
      case BlockTypes.client_name:
        return <NameBlock name={block.name} />;
      case BlockTypes.client_data:
        return <InfoBlock item={block as ClientDataBlock} />;
      case BlockTypes.client_email:
        return <MailBlock name={block.name} />;
      case BlockTypes.tabs:
        return <Tabs item={block as TabsDataBlock} />;
      case BlockTypes.visual_data:
        return <VisualData item={block as VisualDataBlock} />;
      default:
        return null;
    }
  };
  return <div className="content-dispatcher">{dispatcher(block)}</div>;
}
