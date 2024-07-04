import { useState } from "react";
import { FaInfoCircle, FaPlayCircle } from "react-icons/fa";
import { MovieModal } from "../MovieModal";
import styles from "./MovieCard.module.scss";

export const MovieCard = ({ movie }: { movie: Movie }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [watched, setWatched] = useState<boolean>(false);
  const { title, poster_path, overview, release_date } = movie;

  const handleShowOverview = () => {
    setShowModal(true);
  };
  return (
    <div className={styles.card_container}>
      <p className={styles.title}>{title}</p>
      {poster_path === null ? (
        <p>No image available</p>
      ) : (
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          className={styles.image}
        />
      )}

      <div className={styles.actions_container}>
        <FaInfoCircle
          className={styles.info}
          onClick={handleShowOverview}
        />
        <FaPlayCircle
          className={watched ? styles.watched : styles.not_watched}
          onClick={() => setWatched(!watched)}
        />
      </div>
      {showModal && (
        <MovieModal
          open={setShowModal}
          overviewText={overview}
          releaseDate={release_date}
        />
      )}
    </div>
  );
};
