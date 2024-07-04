import styles from "./MovieCard.module.scss";

export const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <div className={styles.movie_container}>
      <p className={styles.movie_title}>{movie.original_title}</p>
      {movie.poster_path === null ? (
        <p>No image available</p>
      ) : (
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.original_title}
          className={styles.movie_image}
        />
      )}
    </div>
  );
};
