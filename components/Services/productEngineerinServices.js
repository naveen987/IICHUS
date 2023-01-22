import React from "react";
import Link from "next/link";

const productEngneeringServices = () => {
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

                <img src="/images/services/product-engineering-service.jpg" alt="Teza" />

                <h3>Business Strategy</h3>
                <p>
                  Our product engineering services provide comprehensive
                  application development and legacy system optimization
                  services to help you build powerful, digital-ready products
                  with low total cost of ownership (TCO). Benefit from our
                  experienced team and cutting-edge technologies to create
                  solutions that meet your specific needs.
                </p>
                <p>
                  If you're looking for top-notch product engineering services,
                  you've come to the right place. We have a team of experienced
                  engineers who can take your product from concept to reality.
                  We offer a full range of product engineering services,
                  including product design, development, and testing. We also
                  have a wide range of experience in many different industries,
                  so we can tailor our services to meet your specific needs.
                  Whether you need help with a new product idea or you're ready
                  to take your existing product to the next level, we can help.
                  Contact us today to learn more about our product engineering
                  services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default productEngneeringServices;
