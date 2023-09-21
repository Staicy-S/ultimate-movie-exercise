import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../src/App.css";
import "/pages/Actors.css";

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

  if (actors.length === 0) {
    return (
      <h4 className="loading-spinner">
        <span className="loader"></span>
      </h4>
    );
  }
  return (
    <>
      <h2>Popular Actors 🌟</h2>
      <section>
        {actors.map((actor) => {
          return (
            <h3 key={actor.id}>
              <Link className="actor-link" to={`/actors/` + actor.id}>
                {actor.name}{" "}
              </Link>
            </h3>
          );
        })}
      </section>
    </>
  );
}
