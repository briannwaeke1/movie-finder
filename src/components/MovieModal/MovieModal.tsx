import { FaTimes } from "react-icons/fa";
import styles from "./MovieModal.module.scss";

export const MovieModal = ({
  overviewText,
  open,
  releaseDate,
}: {
  overviewText: string;
  releaseDate: string;
  open: (showModal: boolean) => void;
}) => {
  return (
    <div
      className={styles.modal_container}
      onClick={() => open(false)}
    >
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <FaTimes
          className={styles.close}
          onClick={() => open(false)}
        />
        <p className={styles.title}>Movie Overview</p>
        <p className={styles.release_date}>Release Date: {releaseDate}</p>
        <div className={styles.content}>
          <p className={styles.overview}>{overviewText}</p>
        </div>
      </div>
    </div>
  );
};
