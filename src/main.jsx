import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "/pages/RootLayout";
import { Homepage } from "/pages/Homepage.jsx";
import { Movies } from "../pages/Movies";
import { MovieDetails } from "../pages/MovieDetails";
import { Actors } from "../pages/Actors";
import { ActorDetails } from "../pages/ActorDetails";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "movies",
        children: [
          {
            index: true,
            element: <Movies />,
          },
          {
            path: ":movieId",
            element: <MovieDetails />,
          },
        ],
      },
      {
        path: "actors",
        children: [
          {
            index: true,
            element: <Actors />,
          },
          {
            path: ":actorsId",
            element: <ActorDetails />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
