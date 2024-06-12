import { Link, NavLink } from "react-router-dom";
import './Card.css'

const Header = () => {
  return (
    <div className="">
      <div className="mb-4">
        <header className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between mb-5 custom-header">
          <Link to="/" className="nav-brand px-2 py-3">
            <a>Zoo App</a>
          </Link>
          <nav className="navbar-nav px-4">
            <ul className="d-flex list-unstyled mb-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/animals" className="nav-link">
                  Animals
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/birds" className="nav-link">
                  Birds
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/insects" className="nav-link">
                  Insects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/fishes" className="nav-link">
                  Fishes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
