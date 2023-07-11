import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;

export const getFilmList = async () => {
  const film = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
  console.log({ filmList: film });
  return film.data.results;
};

export const searchFilm = async (q) => {
  const search = await axios.get(q);
  return;
};
