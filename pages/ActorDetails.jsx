import { useParams } from "react-router-dom";

export function ActorDetails() {
  const { actorsId } = useParams();
  return (
    <>
      <h3>I am the actor details page 🔬🌟</h3>
      <p>{actorsId}</p>
    </>
  );
}
