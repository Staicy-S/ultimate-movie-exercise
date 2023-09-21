import { useState, useEffect } from "react";
import axios from "axios";
import "./Homepage.css";
import { Link } from "react-router-dom";

export function Homepage() {
  const [randomMovie, setRandomMovie] = useState();
  const movieUrl =
    "https://2zc6fti416.execute-api.eu-central-1.amazonaws.com/prod/movies/";
  useEffect(() => {
    axios
      .get(movieUrl)
      .then(({ data }) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        console.log(randomIndex);
        return axios.get(movieUrl + data[randomIndex].id);
      })
      .then(({ data }) => {
        setRandomMovie(data);
      })
      .catch(() => {
        console.log("catching the error 🐛");
      })
      .finally(() => {
        console.log("Request is done 🦋");
      });
  }, []);

  if (!randomMovie) {
    return (
      <>
        <h4 className="loading-spinner">
          <span className="loader"></span>
        </h4>
      </>
    );
  }

  return (
    <>
      <section>
        <h1 className="h1">Welcome to the Ultimate Movie Guide</h1>
        <figure className="random-movie">
          <Link to={`movies/` + randomMovie.id}>
            <img
              src={randomMovie.image}
              alt={randomMovie.title}
              className="random-movie"
            />
          </Link>
          <figcaption>
            Our highlighted movie today is {randomMovie.title}
          </figcaption>
        </figure>
      </section>
    </>
  );
}
