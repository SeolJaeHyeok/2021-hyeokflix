const API_KEY = "c44bcd2c30bdd8361a44243773d49b6f";
const BASE_URL = "https://api.themoviedb.org/3";

export const getMovies = () => {
  return fetch(
    `${BASE_URL}/movie/now_playing/?api_key=${API_KEY}`
  ).then((response) => response.json());
};
