import axios from "axios";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { getMoviesResults } from "../handlers/getMoviesResults";

export const useSearchMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);
  const [pageNum, setPageNum] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchMovies = async () => {
      try {
        const movies = await getMoviesResults(
          debouncedSearchQuery,
          source,
          pageNum
        );
        setMovies(movies.results);
        setTotalPages(movies.total_pages);
        setTotalResults(movies.total_results);
        setError(null);
      } catch (error) {
        if (axios.isCancel(error)) {
          return;
        }
        setError("An error occurred. Please try again later.");
      }
    };
    if (debouncedSearchQuery) {
      fetchMovies();
    } else {
      setMovies([]);
    }
  }, [debouncedSearchQuery, pageNum]);

  useEffect(() => {
    setPageNum(1);
  }, [searchQuery]);

  return {
    movies,
    searchQuery,
    setSearchQuery,
    error,
    pageNum,
    setPageNum,
    totalPages,
    totalResults,
  };
};
