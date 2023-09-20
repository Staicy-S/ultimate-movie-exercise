import { useParams } from "react-router-dom";

export function MovieDetails() {
  const { movieId } = useParams();
  return (
    <>
      <h3>I am the movie details page 🔬🎬</h3>
      <p>{movieId}</p>
    </>
  );
}
