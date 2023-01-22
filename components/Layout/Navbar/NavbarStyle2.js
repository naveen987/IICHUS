import React from "react";
import Link from "@/utils/ActiveLink";

const NavbarStyle2 = () => {
  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area fixed-top navbar-style-two">
        <div className="main-navbar">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link href="/">
                <a className="navbar-brand">
                  <img
                    style={{ width: "40%" }}
                    src="/images/IIHCUS-LOGO.jpg"
                    alt="Black logo"
                    className="black-logo"
                  />
                </a>
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link href="#">
                      <a className="nav-link">
                        Home <i className="ri-arrow-down-s-line"></i>
                      </a>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/" activeClassName="active">
                          <a className="nav-link">Home Demo - 1</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/index-2" activeClassName="active">
                          <a className="nav-link">Home Demo - 2</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/index-3" activeClassName="active">
                          <a className="nav-link">Home Demo - 3</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      About <i className="ri-arrow-down-s-line"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/about" activeClassName="active">
                          <a className="nav-link">About Style - 1</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/about-2" activeClassName="active">
                          <a className="nav-link">About Style - 2</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Services <i className="ri-arrow-down-s-line"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/services" activeClassName="active">
                          <a className="nav-link">Services</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/service-details" activeClassName="active">
                          <a className="nav-link">Services Details</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="/domains" activeClassName="active">
                      <a className="nav-link">Domains</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/career" activeClassName="active">
                      <a className="nav-link">Career</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Blog <i className="ri-arrow-down-s-line"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/blog" activeClassName="active">
                          <a className="nav-link">Blog Grid</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/blog-right-sidebar"
                          activeClassName="active"
                        >
                          <a className="nav-link">Blog Right Sidebar</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/blog-details" activeClassName="active">
                          <a className="nav-link">Blog Details</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="/contact" activeClassName="active">
                      <a className="nav-link">Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="others-options d-flex align-items-center">
                <div className="option-item">
                  <form className="search-box">
                    <input
                      type="text"
                      className="input-search"
                      placeholder="Search..."
                    />
                    <button type="submit">
                      <i className="ri-search-line"></i>
                    </button>
                  </form>
                </div>

                <div className="option-item">
                  <Link href="/contact">
                    <a className="default-btn">Contact Us</a>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarStyle2;
