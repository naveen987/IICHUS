import React from "react";
import Link from "next/link";

const AboutOurCompany = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image-wrap">
                <img
                  src="/images/about/home-page-section-back.JPG"
                  alt="About Image"
                  data-aos="fade-down"
                  data-aos-delay="50"
                  data-aos-duration="500"
                  data-aos-once="true"
                />
                <img
                  src="/images/about/home-page-section-front.JPG"
                  alt="About Image"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="500"
                  data-aos-once="true"
                />
              </div>
            </div>

            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="about-content">
                <span>About Our Company</span>
                <h3>
                  We design, Implement, deliver and manage complete IT solutions
                  for your company
                </h3>
                <p>
                  We have based our company practice around our experienced
                  Capability Leads, who provide IT solutions and services around
                  our core streams of services.
                </p>
                <p>
                  As the world transitions to a new normal, we provide
                  industrialized, holistic, and integrated approach to address
                  today’s changing needs and to accelerate your digital journey
                  and deliver business outcomes and minimise costs.
                </p>
                <div className="about-btn">
                  <Link href="/about">
                    <a className="default-btn">Learn More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutOurCompany;
