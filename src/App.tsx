import { MovieList } from "./components/MovieList";
import { SearchInput } from "./components/SearchInput";
import { useSearchMovies } from "./hooks/useSearchMovies";

function App() {
  const { movies, searchQuery, setSearchQuery, error } = useSearchMovies();
  return (
    <>
      <SearchInput
        searchQuery={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      {error && <p>{error}</p>}
      <MovieList movies={movies} />
    </>
  );
}

export default App;
