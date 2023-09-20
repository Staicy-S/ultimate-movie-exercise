import { NavLink } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <>
      <nav>
        <ul>
          <NavLink className="nav-link" to="/">
            <li>Home</li>
          </NavLink>
          <NavLink className="nav-link" to="/movies">
            <li>Movies</li>
          </NavLink>
          <NavLink className="nav-link" to="/actors">
            <li>Actors</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
}
