import React from "react";
import Link from "next/link";

const MobileAppDetails = () => {
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

                <img src="../images/services/mobile-app-development.jpg" alt="Teza" />

                <h3>Business Strategy</h3>
                <p>
                  We are a global mobile app development company that
                  specializes in creating rich native apps, designed to provide
                  an optimal user experience for businesses of all sizes across
                  multiple industries. Our development process is tailored to
                  ensure that all apps are flawless, efficient, and secure. Let
                  us create a custom mobile app solution for you that meets your
                  needs and goals.
                </p>
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
                        <img
                          src="/images/Mobile-App-UI-UX Design-Service-Providers.jpg"
                          alt="Teza"
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
                        <h3>Mobile App UI & UX</h3>
                        <p>
                          Get your mobile app UI and UX designed by the best in
                          the business! Our team of experts will work with you
                          to create a user-friendly and visually appealing
                          interface that will stand out from the competition.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center justify-content-center">
                    <div
                      className="col-lg-6 col-md-12"
                      data-aos="fade-left"
                      data-aos-delay="50"
                      data-aos-duration="500"
                      data-aos-once="true"
                    >
                      <div className="about-content">
                        <h3>Custom Mobile Apps Development</h3>
                        <p>
                          We will deliver amazing apps as per your requirements.
                          Develop custom mobile apps with our experienced team
                          and get the benefit of a powerful and user-Increase
                          productivity and efficiency with custom mobile apps
                          that are tailored to your specific needs friendly
                          interface.
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-lg-6 col-md-12"
                      data-aos="fade-right"
                      data-aos-delay="50"
                      data-aos-duration="500"
                      data-aos-once="true"
                    >
                      <div className="about-image">
                        <img
                          src="/images/Custom-Mobile-Apps-Development.jpg"
                          alt="Teza"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center justify-content-center">
                    <div
                      className="col-lg-6 col-md-12"
                      data-aos="fade-right"
                      data-aos-delay="50"
                      data-aos-duration="500"
                      data-aos-once="true"
                    >
                      <div className="about-image">
                        <img src="/images/mobile-app-development.jpg" alt="Teza" />
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
                        <h3>Android App</h3>
                        <p>
                          latest and greatest Android app, you can take your
                          device to the next level with increased functionality
                          and customization. From improved navigation to added
                          security features.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center justify-content-center">
                    <div
                      className="col-lg-6 col-md-12"
                      data-aos="fade-left"
                      data-aos-delay="50"
                      data-aos-duration="500"
                      data-aos-once="true"
                    >
                      <div className="about-content">
                        <h3>iOS App</h3>
                        <p>
                          This amazing apps has everything you need to stay
                          ahead of the curve and make sure your tech is
                          up-to-date with the latest developments. Get ready to
                          revolutionize your tech game with IOS Apps!
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-lg-6 col-md-12"
                      data-aos="fade-right"
                      data-aos-delay="50"
                      data-aos-duration="500"
                      data-aos-once="true"
                    >
                      <div className="about-image">
                        <img
                          src="/images/mobile-app-development-one.jpg"
                          alt="Teza"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileAppDetails;
