import { MovieCard } from "../MovieCard";
import styles from "./MovieList.module.scss";

export const MovieList = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className={styles.movie_list_container}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
        />
      ))}
      {movies.length === 0 && <p>No movies found</p>}
    </div>
  );
};
