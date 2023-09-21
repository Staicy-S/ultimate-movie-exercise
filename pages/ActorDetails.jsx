import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../src/App.css";
import "/pages/Actors.css";

export function ActorDetails() {
  const [actorDetails, setActorDetails] = useState();
  const { actorsId } = useParams();
  const actorUrl =
    `https://2zc6fti416.execute-api.eu-central-1.amazonaws.com/prod/movies/actors/` +
    actorsId;

  useEffect(() => {
    axios
      .get(actorUrl)
      .then(({ data }) => {
        setActorDetails(data);
        console.log(data);
      })
      .catch(() => {
        console.log("catching the error 🐛");
      })
      .finally(() => {
        console.log("Request is done 🦋");
      });
  }, [actorUrl]);

  if (!actorDetails) {
    return (
      <>
        <h4 className="loading-spinner">
          <span className="loader"></span>
        </h4>
      </>
    );
  }
  if (actorDetails) {
    return (
      <>
        <h2>{actorDetails.name} 🔬🌟</h2>
        <p>
          {actorDetails.name} starring as {actorDetails.character}.
        </p>
        <figure className="actors-portrait">
          <img
            src={actorDetails.image}
            alt={`Portrait of ` + actorDetails.name}
            className="actors-portrait"
          />
        </figure>
      </>
    );
  }
}
