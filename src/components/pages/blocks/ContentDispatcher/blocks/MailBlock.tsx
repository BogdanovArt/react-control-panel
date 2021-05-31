import styles from "./Blocks.module.scss";

export function MailBlock({ name }: { name: string | undefined }) {
  return <div className={styles.BlockMail}>{name}</div>;
}
