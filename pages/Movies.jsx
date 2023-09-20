import axios from "axios";
import { useState, useEffect } from "react";

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
      })
      .catch(() => {
        console.log("catching the error 🐛");
      })
      .finally(() => {
        console.log("Request is done 🦋");
      });
  });

  return (
    <>
      <h3>I am the movie page 🎬</h3>

      <p>
        {movies.map((movie) => {
          return (
            <>
              <p>{movie.title}</p>
            </>
          );
        })}
      </p>
    </>
  );
}
