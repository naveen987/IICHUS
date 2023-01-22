import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const WhyChooseUsStyle2 = () => {
  // if toggler is updated when lightbox is closed it will open it
  // if toggler is updated when lightbox is opened it will close it
  // const [toggler, setToggler] = useState(false);
  return (
    <>
      {/* <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=bk7McNUjWgw"]}
      /> */}

      <div className="why-choose-us-area-with-video ptb-100">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-12">
              {/* <div className="why-choose-us-video-view">
                <div className="video-btn" onClick={() => setToggler(!toggler)}>
                  <i className="flaticon-play-button"></i>
                </div>
              </div> */}
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="why-choose-us-content wrap-color"
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <span>Why Choose Us</span>
                <h3>Our Working Process To Help Your Boost Your Business</h3>
                <p>
                iihcus provides the best IT services for your small to medium-sized business. We offer speed, low cost, data protection and stability so you can focus on what matters most to you!.
                </p>

                <div className="choose-us-inner-box">
                  <div className="icon">
                    <i className="flaticon-ad-campaign"></i>
                  </div>
                  <h4>INSURANCE AND HEALTHCARE</h4>
                  <p>
                  We help to look at ways to reimagine and apply technology broadly to traditional functions to face the disruptions. Our experienced consultants offer innovative strategies and valuable insights to sustainable competitive advantage.
                  </p>
                </div>

                <div className="choose-us-inner-box">
                  <div className="icon">
                    <i className="flaticon-public-relations"></i>
                  </div>
                  <h4>BANKING AND FINANCIAL</h4>
                  <p>
                  Disruptions in the business landscape and the impact of technology are compelling banks to shift to innovative business models, we help customers embrace digital transformation through the various banking functions.
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

export default WhyChooseUsStyle2;
