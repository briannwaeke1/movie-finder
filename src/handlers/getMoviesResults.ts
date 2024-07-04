import axios, { CancelTokenSource } from "axios";

export const getMoviesResults = async (
  query: string,
  source: CancelTokenSource
) => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: {
        api_key: `${import.meta.env.VITE_THE_MOVIE_API_KEY}`,
        query: query,
      },
      cancelToken: source.token,
    }
  );

  return response.data.results;
};
