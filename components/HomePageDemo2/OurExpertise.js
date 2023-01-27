import React from "react";

const OurExpertise = () => {
  return (
    <>
      <div className="expertise-area-with-white-color pb-100">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="expertise-content black-color"
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <span>Our Expertise</span>
                <h3>
                  Boost Business With Creative Idea & Brand Solutions With Us
                </h3>
                <p>
                Get creative and stand out from your competitors with our innovative brand solutions. We specialize in developing customized marketing strategies that will help you boost your business. Our experienced team is here to help you reach your goals and beyond.
                </p>

                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-6">
                    <div className="expertise-inner-box">
                      <div className="icon">
                        <i className="ri-stack-line"></i>
                      </div>
                      <h4>Website design</h4>
                      {/* <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        in pretium blandit urna.
                      </p> */}
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="expertise-inner-box">
                      <div className="icon">
                        <i className="ri-focus-2-line"></i>
                      </div>
                      <h4>Digital marketing</h4>
                      {/* <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        in pretium blandit urna.
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="expertise-image-wrap"
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <img src="./images/expertise/expertise.png" alt="image" />

                <div className="expertise-shape-2">
                  <img
                    src="./images/expertise/shape-2.png"
                    alt="image"
                    data-aos="fade-left"
                    data-aos-delay="50"
                    data-aos-duration="500"
                    data-aos-once="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurExpertise;
