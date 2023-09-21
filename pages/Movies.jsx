import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../src/App.css";
import "/pages/Movies.css";

export function Movies() {
  const [movies, setMovies] = useState([]);
  const movieUrl =
    "https://2zc6fti416.execute-api.eu-central-1.amazonaws.com/prod/movies/";

  useEffect(() => {
    axios
      .get(movieUrl)
      .then(({ data }) => {
        setMovies(data);
        console.log(data);
        // console.log(data.id);
      })
      .catch(() => {
        console.log("catching the error 🐛");
      })
      .finally(() => {
        console.log("Request is done 🦋");
      });
  }, []);

  if (movies.length === 0) {
    return (
      <h4 className="loading-spinner">
        <span className="loader"></span>
      </h4>
    );
  }

  return (
    <>
      <section>
        <h2>Popular Movies 🎬</h2>
        {movies.map((movie) => {
          return (
            <article key={movie.id}>
              <h3>
                <Link to={`/movies/` + movie.id} className="movie-links">
                  {movie.title}
                </Link>
              </h3>
              <figure>
                <Link to={`/movies/` + movie.id}>
                  <img
                    className="teaser"
                    src={movie.thumbnail}
                    alt={`thumbnail of` + movie.thumbnail}
                  />
                </Link>
              </figure>
            </article>
          );
        })}
      </section>
    </>
  );
}
