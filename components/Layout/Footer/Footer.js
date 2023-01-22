import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area pt-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <div className="widget-logo">
                  <Link href="/">
                    <a>
                      <img src="/images/logo-2.png" alt="Teza" />
                    </a>
                  </Link>
                </div>
                <p>
                  We have based our company practice around our experienced
                  Capability Leads, who provide IT solutions and services around
                  our core streams of services.
                </p>
                <ul className="widget-social">
                  <li>
                    <a
                      href="https://www.facebook.com/EnvyTheme"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-facebook-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/?lang=en"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-twitter-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-instagram-line"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/signup"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-linkedin-line"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget ps-5">
                <h3>Useful Link</h3>

                <ul className="quick-links">
                  <li>
                    <Link href="/about">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <a>Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <a>Blog</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget ps-5">
                <h3>Our Services</h3>

                <ul className="quick-links">
                  <li>
                    <Link href="/service-details">
                      <a>Web Development</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Digital-Marketing">
                      <a>Digital Marketing</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Application-Development">
                      <a>App Development</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Erp">
                      <a>ERP</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget ps-3">
                <h3>Contact Info</h3>

                <ul className="footer-information">
                  <li>
                    <i className="ri-map-pin-line"></i>
                    Flat no. A/1-3, V Block, Ground Floor, Sri Krishna
                    Residency, J P Nagar 1st phase, Sarakki Bengaluru Bangalore.
                    Karnataka-560078, India
                  </li>
                  <li>
                    <i className="ri-phone-fill"></i>
                    <a href="tel:91298765436543">+919972876370</a>
                  </li>
                  <li>
                    <i className="ri-mail-line"></i>
                    <a href="mailto:hello@teza.com">info@iihcustechnology.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="copyright-area-content">
              <p>
                Copyright {currentYear} All Rights Reserved by {" IICHUS"}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
