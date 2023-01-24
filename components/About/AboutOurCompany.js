import React from "react";

const AboutOurCompany = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="about-image">
                <img src="../images/about/about-1.png" alt="Teza" />
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
                <h3>Streamlining Your Business with Innovative IT Solutions</h3>
                <p>
                  IIHCUS TECHNOLOGY is a global provider of digital solutions
                  and services. We help our clients to digitally transform their
                  businesses and accelerate their journey to the new normal. Our
                  team of experts work with you to understand your business
                  needs and goals, and then craft a tailor-made solution that
                  will help you achieve your desired outcomes. We have a proven
                  track record in delivering digital solutions that create value
                  for our clients and enable them to stay ahead of the
                  competition. If you are looking for a partner that can help
                  you navigate the ever-changing digital landscape, then IIHCUS
                  TECHNOLOGY is the right choice for you. Contact us today to
                  learn more about what we can do for you
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutOurCompany;
