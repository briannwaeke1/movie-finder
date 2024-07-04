import axios from "axios";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { getMoviesResults } from "../handlers/getMoviesResults";

export const useSearchMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    getMoviesResults(debouncedSearchQuery, source)
      .then((movies) => {
        setMovies(movies);
        setError(null);
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          return;
        }
        setError("An error occurred. Please try again later.");
      });
  }, [debouncedSearchQuery]);

  return { movies, searchQuery, setSearchQuery, error };
};
