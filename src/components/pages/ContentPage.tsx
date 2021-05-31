import { useSelector } from "react-redux";

import { getContentData, getError } from "store/content/getters";

import { ContentDispatcher } from "./blocks/ContentDispatcher/ContentDispatcher";
import { ErrorBlock } from "components/common/Error/Error";

import styles from "./ContentPage.module.scss";

export function ContentPage() {
  const content = useSelector(getContentData);
  const error = useSelector(getError);

  return (
    <div className={styles.ContentPage}>
      {error ? (
        <ErrorBlock error={error} />
      ) : (
        content.map((block, ind) => (
          <ContentDispatcher key={ind} block={block} />
        ))
      )}
    </div>
  );
}
