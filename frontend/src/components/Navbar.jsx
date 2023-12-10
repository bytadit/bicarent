import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const navItems = [
    { id: 1, name: "Our Services", link: "ourservices" },
    { id: 2, name: "Why Us", link: "whyus" },
    { id: 3, name: "Testimonial", link: "testimonial" },
    { id: 4, name: "FAQ", link: "faq" },
  ];

  return (
    <nav className="navbar navbar-expand-xl byt-navbar position-sticky top-0">
      <div className="container-fluid byt-container">
        <Link
          className="navbar-brand byt-navbar__logo"
          to="/"
          aria-label="Binar Car Rental"
        ></Link>
        <button
          className="navbar-toggler byt-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end w-50" id="navbarScroll">
          <div className="offcanvas-header pt-5 pb-0 py-lg-2">
            <a
              className="offcanvas-title nav-link fw-bold text-black"
              id="offcanvasLabel"
              href="#"
            >
              BCR
            </a>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body py-1 py-lg-0">
            <ul className="navbar-nav ms-auto navbar-nav-scroll">
              {navItems.map((item, index) => (
                <li className="nav-item" key={index}>
                  <ScrollLink
                    to={item.link}
                    className="nav-link me-lg-4 fw-semibold pointer"
                  >
                    {item.name}
                  </ScrollLink>
                </li>
              ))}
              <li className="nav-item">
                <button type="button" className="btn btn-success byt-button">
                  Register
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
