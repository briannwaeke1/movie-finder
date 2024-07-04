import { FaTimes } from "react-icons/fa";
import styles from "./MovieModal.module.scss";

export const MovieModal = ({
  movie,
  open,
}: {
  movie: Movie;
  open: (showModal: boolean) => void;
}) => {
  const { overview, release_date, title } = movie;
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
        <p className={styles.title}>{title}</p>
        <p className={styles.release_date}>Release Date: {release_date}</p>
        <div className={styles.content}>
          <p className={styles.overview}>{overview}</p>
        </div>
      </div>
    </div>
  );
};
