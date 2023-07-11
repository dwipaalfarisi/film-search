import { useEffect, useState } from "react";
import "./App.css";
import { getFilmList } from "./api";

const App = () => {
  const [popularFilms, setPopularFilms] = useState([]);

  useEffect(() => {
    getFilmList().then((result) => setPopularFilms(result));
  }, []);

  const PopularFilmList = () => {
    return popularFilms.map((film, i) => {
      return (
        <div className="Film-wrapper" key={i}>
          <div className="Film-title">{film.title}</div>
          <img
            className="Film-image"
            src={`${process.env.REACT_APP_BASEIMGURL}${film.poster_path}`}
            alt="film poster"
          />
          <div className="Film-date">{film.release_date}</div>
          <div className="Film-rate">{film.average_vote}</div>
        </div>
      );
    });
  };

  const search = (q) => {
    console.log({ q });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>FILMS</h1>
        <input
          placeholder="Find films..."
          className="Film-search"
          onChange={({ target }) => search(target.value)}
        />
        <div className="Film-container">
          <PopularFilmList />
        </div>
      </header>
    </div>
  );
};

export default App;
