import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "/pages/Movies.css";

export function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState();
  const { movieId } = useParams();
  const movieUrl =
    "https://2zc6fti416.execute-api.eu-central-1.amazonaws.com/prod/movies/" +
    movieId;

  useEffect(() => {
    axios
      .get(movieUrl)
      .then(({ data }) => {
        setMovieDetails(data);
        console.log(data);
      })
      .catch(() => {
        console.log("catching the error 🐛");
      })
      .finally(() => {
        console.log("Request is done 🦋");
      });
  }, [movieUrl]);

  if (!movieDetails) {
    console.log(movieDetails);
    return (
      <>
        <h4 className="loading-spinner">
          <span className="loader"></span>
        </h4>
      </>
    );
  }

  if (movieDetails) {
    return (
      <>
        <h2>🎬 {movieDetails.title}</h2>
        <figure className="thumbnail">
          <img
            className="thumbnail"
            src={movieDetails.image}
            alt={`Thumbnail of` + movieDetails.title}
          />
        </figure>
        <h3>Main characters from {movieDetails.title}</h3>
        <ol>
          {movieDetails.cast.map((castmember) => {
            return (
              <li key={castmember.id}>
                <Link className="cast-members" to={`/actors/` + castmember.id}>
                  {castmember.character}
                </Link>
              </li>
            );
          })}
        </ol>
      </>
    );
  }
}
