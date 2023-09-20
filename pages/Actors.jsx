import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../src/App.css";

export function Actors() {
  const [actors, setActors] = useState([]);
  const actorsUrl =
    "https://2zc6fti416.execute-api.eu-central-1.amazonaws.com/prod/movies/actors";

  useEffect(() => {
    axios
      .get(actorsUrl)
      .then(({ data }) => {
        setActors(data);
      })
      .catch(() => {
        console.log("catching the error 🐛");
      })
      .finally(() => {
        console.log("Request is done 🦋");
      });
  }, []);
  return (
    <>
      <h3>I am the actors page 🌟</h3>

      {actors.map((actor) => {
        return (
          <Link
            className="actor-link"
            to={`/actors/` + actor.id}
            key={actor.id}
          >
            {actor.name}{" "}
          </Link>
        );
      })}
    </>
  );
}
