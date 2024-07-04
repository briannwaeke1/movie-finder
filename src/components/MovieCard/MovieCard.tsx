import { useState } from "react";
import { FaInfoCircle, FaPlayCircle } from "react-icons/fa";
import { MovieModal } from "../MovieModal";
import styles from "./MovieCard.module.scss";

export const MovieCard = ({ movie }: { movie: Movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [watched, setWatched] = useState(false);
  const { title, poster_path } = movie;

  const handleShowOverview = () => {
    setShowModal(true);
  };
  return (
    <div className={styles.card_container}>
      <p
        className={styles.title}
        data-testid="movie-title"
      >
        {title}
      </p>
      {poster_path === null ? (
        <p>No image available</p>
      ) : (
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          className={styles.image}
          data-testid="movie-poster"
        />
      )}

      <div className={styles.actions_container}>
        <FaInfoCircle
          className={styles.info_icon}
          onClick={handleShowOverview}
          data-testid="info-icon"
        />
        <FaPlayCircle
          className={watched ? styles.watched_icon : styles.not_watched_icon}
          onClick={() => setWatched(!watched)}
        />
      </div>
      {showModal && (
        <MovieModal
          open={setShowModal}
          movie={movie}
        />
      )}
    </div>
  );
};
