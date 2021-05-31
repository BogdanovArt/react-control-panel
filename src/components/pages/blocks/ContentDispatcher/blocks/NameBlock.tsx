import styles from "./Blocks.module.scss";

export function NameBlock({ name }: { name: string | undefined }) {
  return <div className={styles.BlockName}>{name}</div>;
}
