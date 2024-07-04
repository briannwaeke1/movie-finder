import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { MovieList } from "./MovieList";

test("renders MovieList with mock object", async () => {
  const movies = [
    {
      adult: false,
      backdrop_path: "/test_backdrop_path",
      genre_ids: [1, 2],
      id: 1,
      original_language: "en",
      original_title: "Test Movie",
      overview: "overview",
      popularity: 10,
      poster_path: "/test_poster_path",
      release_date: "2021-01-01",
      title: "Test Movie",
      video: false,
      vote_average: 5,
      vote_count: 100,
    },
  ];

  render(<MovieList movies={movies} />);
  expect(screen.getByText(movies[0].title)).toBeTruthy();
});
