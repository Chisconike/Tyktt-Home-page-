import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

function Footer() {
  const location = useLocation();

  return (
    <footer className="bg-link text-center text-lg-start nav_color">
      <div className="container py-4">
        <section className="mb-4">
          <a
            href="https://www.facebook.com/share/1LmYVNF9DV/"
            className="social-btn bg-facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          <a
            href="https://x.com/TravelYakata?t=r4gr2U8f4yi-yFhE71VjFg&s=09"
            className="social-btn bg-twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>

          <a
            href="https://share.google/lVdX9OBWOTzKx7jq0"
            className="social-btn bg-google"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-google"></i>
          </a>

          <a
            href="https://www.instagram.com/travelyakata?igsh=NGFxajdyZmRkZ2Vl"
            className="social-btn bg-instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </section>

        <section className="mb-4">
          <div className="row justify-content-between align-items-center">
            <div className="col-12 col-md-6 mb-4 mb-md-0 text-white">
              <div>
                <img src={logo} alt="Logo" width={120} loading="lazy" />
                <p>
                  Tyktt was founded by <strong>Travel Yakata</strong> with a
                  single goal: to make travel management easier for agencies
                  across Africa and beyond. From humble beginnings, we’ve grown
                  into a trusted platform that combines global reach with local
                  understanding.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase text-white">Useful Links</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <NavLink
                    className={`nav-link ${
                      location.pathname === "/toc"
                        ? "active text-white fw-bold"
                        : ""
                    }`}
                    to="/toc"
                  >
                    Terms & Conditions
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={`nav-link ${
                      location.pathname === "/privacy-policy"
                        ? "active text-white fw-bold"
                        : ""
                    }`}
                    to="/privacy-policy"
                  >
                    Privacy Policy
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className="text-center p-3 copy_rite">
        &copy; {new Date().getFullYear()} Copyright:
        <NavLink className="text-light ps-2 text-decoration-none" to="/">
          Travel Yakata
        </NavLink>
      </div>
    </footer>
  );
}

export default Footer;
