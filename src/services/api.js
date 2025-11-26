const API_KEY = "3f49cf40e1df9d41ae58d19e9a6e9613";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movies/popular?api_key=${API_KEY}`);
  const data = response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`,
  );
  const data = response.json();
  return data.results;
};

console.log(getPopularMovies())
console.log(searchMovies("Harry Potter"))
