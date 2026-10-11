import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { StudentContext } from "../../context/StudentContext";
import "./Navbar.css";

function Navbar() {
  const { favourites } = useContext(StudentContext);
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        Student<span>List</span>
      </Link>

      <div className="nav-links">
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
        >
          All Students
        </Link>

        <Link
          to="/favourites"
          className={location.pathname === "/favourites" ? "active" : ""}
        >
          Favourites
          <span className="favourite-count">{favourites.length}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;