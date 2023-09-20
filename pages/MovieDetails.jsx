import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

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
        <h4>🔬🎬 Take a closer look at... </h4>
        <h3>{movieDetails.title}</h3>
        <figure>
          <img
            className="thumbnail"
            src={movieDetails.image}
            alt={`Thumbnail of` + movieDetails.title}
          />
        </figure>
        Main characters from {movieDetails.title}
        <ol>
          {movieDetails.cast.map((castmember) => {
            return (
              <Link to={`/actors/` + castmember.id} key={castmember.id}>
                <li>{castmember.character}</li>
              </Link>
            );
          })}
        </ol>
      </>
    );
  }
}
