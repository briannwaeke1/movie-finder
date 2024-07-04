import "./App.css";
import { MovieList } from "./components/MovieList";
import { Pagination } from "./components/Pagination";
import { SearchInput } from "./components/SearchInput";
import { useSearchMovies } from "./hooks/useSearchMovies";
function App() {
  const {
    movies,
    searchQuery,
    setSearchQuery,
    error,
    pageNum,
    setPageNum,
    totalPages,
    totalResults,
  } = useSearchMovies();
  return (
    <>
      <SearchInput
        searchQuery={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      {error && <h3>{error}</h3>}
      <MovieList movies={movies} />
      {movies.length > 0 && (
        <Pagination
          pageNum={pageNum}
          setPageNum={setPageNum}
          totalPages={totalPages}
          totalResults={totalResults}
        />
      )}
    </>
  );
}

export default App;
