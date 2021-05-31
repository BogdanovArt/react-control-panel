import styles from "./Default.module.scss";
import { LayoutProps } from "./types";

const Layout = ({ menu, main }: LayoutProps) => {
  return (
    <div className="container">
      <div className={styles.AppLayout}>
        <div className={styles.AppMenu}>
          {menu}
        </div>
        <div className={styles.AppContent}>
          {main}
        </div>
      </div>
    </div>
  );
};

export default Layout;
