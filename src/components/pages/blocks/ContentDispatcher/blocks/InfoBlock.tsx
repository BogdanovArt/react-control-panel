import { Icon } from "@telsystems/design";
import { ClientDataBlock } from "store/content/types";

import styles from "./Blocks.module.scss";

export function InfoBlock({ item }: { item: ClientDataBlock }) {
  const INN = (item: ClientDataBlock) => {
    if (item.name_inn || item.value_inn) {
      return (
        <div className={styles.BlockInfoWrapper}>
          <div className={styles.BlockInfoItem}>
            <div className={styles.BlockIcon}>
              <img src="svg/user.svg" alt="user icon"/>
            </div>
            <div className={styles.BlockMail}>{item.name_inn}</div>
            <div className={styles.BlockInfoTitle}>{item.value_inn}</div>
          </div>
        </div>
      );
    }
    return null;
  };

  const INFO = (item: ClientDataBlock) => {
    if (
      item.name_admin ||
      item.value_admin ||
      item.name_tel ||
      item.value_tel
    ) {
      return (
        <div className={styles.BlockInfoWrapper}>
          { (item.name_admin || item.value_admin) && (
            <div className={styles.BlockInfoItem}>              
              <div className={styles.BlockIcon}>                
                <img src="svg/help.svg" alt="help icon"/>
              </div>
              <div className={styles.BlockMail}>{item.name_admin}</div>
              <div className={styles.BlockInfoTitle}>{item.value_admin}</div>
            </div>
          )}
          {(item.name_tel|| item.value_tel) && (
            <div className={styles.BlockInfoItem}>              
              <div className={styles.BlockIcon}>
                <img src="svg/phone.svg" alt="phone icon"/>
              </div>
              <div className={styles.BlockMail}>{item.name_tel}</div>
              <div className={styles.BlockInfoTitle}>{item.value_tel}</div>
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className={styles.BlockInfo}>
      {INN(item)}
      {INFO(item)}
    </div>
  );
}
