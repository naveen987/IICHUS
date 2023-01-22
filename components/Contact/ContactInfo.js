import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-information-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>Contact Information</span>
            <h2>Alone We Can Do So Little Together We Can Do So Much</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="contact-information-card">
                <div className="icon">
                  <i className="ri-map-pin-line"></i>
                </div>
                <h3>Address</h3>
                <p>
                  Flat no. A/1-3, V Block, Ground Floor, Sri Krishna Residency,
                  J P Nagar 1st phase, Sarakki Bengaluru Bangalore.
                  Karnataka-560078, India
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="contact-information-card">
                <div className="icon">
                  <i className="ri-mail-line"></i>
                </div>
                <h3>Email Address</h3>
                <p>
                  <a href="mailto: info@iihcustechnology.com">
                    {" "}
                    info@iihcustechnology.com
                  </a>{" "}
                  <br />{" "}
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="contact-information-card">
                <div className="icon">
                  <i className="ri-phone-line"></i>
                </div>
                <h3>Phone Number</h3>
                <p>
                  <a href="tel:91298765436543">+919972876370</a> <br />{" "}
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="contact-information-card">
                <div className="icon">
                  <i className="ri-time-line"></i>
                </div>
                <h3>Working Hours</h3>
                <p>
                  Open Monday To Friday <br /> From 9.30 AM to 06.00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
