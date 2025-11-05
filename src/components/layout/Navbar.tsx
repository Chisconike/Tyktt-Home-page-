import { NavLink, useLocation } from "react-router-dom";
import ngn from "../../assets/nigeria.png";
import ghs from "../../assets/ghana.png";
import logo from "../../assets/logo.png";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg nav_color">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          <img src={logo} alt="Logo" width={120} loading="lazy" />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className={`nav-link ${
                  location.pathname === "/" ? "active text-white fw-bold" : ""
                }`}
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={`nav-link ${
                  location.pathname === "/about"
                    ? "active text-white fw-bold"
                    : ""
                }`}
                to="/about"
              >
                About Us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={`nav-link ${
                  location.pathname === "/contact"
                    ? "active text-white fw-bold"
                    : ""
                }`}
                to="/contact"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Login / Sign Up
              </a>
              <ul className="dropdown-menu border-0 shadow-sm w-25">
                <li>
                  <a
                    className="dropdown-item"
                    href="https://ng.tyktt.com"
                    target="_blank"
                  >
                    Nigeria{" "}
                    <img
                      src={ngn}
                      alt="nigeria logo"
                      width={25}
                      className="ms-2"
                      loading="lazy"
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://gh.tyktt.com"
                    target="_blank"
                  >
                    Ghana{" "}
                    <img
                      src={ghs}
                      alt="ghana logo"
                      width={25}
                      className="ms-2"
                      loading="lazy"
                    />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
