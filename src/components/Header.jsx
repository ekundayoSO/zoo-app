import { Link, NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import "./Card.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark sticky-top mb-4">
      <div className="container">
        <Link to="/" className="navbar-brand text-white">
          Zoo App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <BiMenu style={{ color: "white" }} />
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto nav-underline">
            <li className="nav-item">
              <NavLink to="/" className="nav-link text-white">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/animals" className="nav-link text-white">
                Animals
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/birds" className="nav-link text-white">
                Birds
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/insects" className="nav-link text-white">
                Insects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/fishes" className="nav-link text-white">
                Fishes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link text-white">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
