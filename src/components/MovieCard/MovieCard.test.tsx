import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { MovieCard } from "./MovieCard";

describe("A truthy statement", () => {
  it("should be equal to 2", () => {
    expect(1 + 1).toEqual(2);
  });
});

const mockMovie = {
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
};

describe("MovieCard", () => {
  it("should render the movie title", () => {
    render(<MovieCard movie={mockMovie} />);
    const titleElement = screen.getByText(mockMovie.title);
    expect(titleElement).toBeTruthy();
  });

  it("should render the movie poster if available", () => {
    render(<MovieCard movie={mockMovie} />);
    const posterElement = screen.getByTestId("movie-poster");
    expect(posterElement.getAttribute("src")).toBe(
      `https://image.tmdb.org/t/p/w500/${mockMovie.poster_path}`
    );
  });

  it("user click on info icon should render the details modal", async () => {
    render(<MovieCard movie={mockMovie} />);
    const infoIcon = screen.getByTestId("info-icon");
    await userEvent.click(infoIcon);
    const modalElement = screen.getByText(`${mockMovie.overview}`);
    expect(modalElement.textContent).toBe(mockMovie.overview);
  });
});
