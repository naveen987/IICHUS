import React from "react";
import Link from "next/link";

const Testing = () => {
  return (
    <>
      <div className="services-details-area pt-100 pb-75">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="services-details-content">
                <Link href="/services">
                  <a className="back-to-services">
                    <i className="ri-arrow-left-line"></i> Back to Services
                  </a>
                </Link>
                <img src="/images/services/testing.jpg" alt="Teza" />
                <h3>Business Strategy</h3>
                <p>
                  We offers great customer experience by delivering quality
                  products in a timely manner. We specialize in testing to
                  ensure the highest standards of quality are met. Get in touch
                  with us today to ensure your product is delivered on time and
                  to the highest quality.
                </p>
                <div>
                  <p>
                    Our team will work with you to develop a customized solution
                    that is designed specifically for your business needs. We
                    understand that each company has different processes,
                    procedures, and needs for their products. By understanding
                    our client's needs, we can assist them with developing a
                    custom solution that fits their needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testing;
