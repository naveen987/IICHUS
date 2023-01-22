import React from "react";
import Link from "next/link";

const ServicesCard = () => {
  return (
    <>
      <div className="services-area pt-100 pb-100">
        <div className="container">
          <div className="section-title">
            <span>Our Services</span>
            <h2>Get Benefit And More With Our Excellent Services</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="ri-codepen-line"></i>
                </div>
                <h6>
                  <Link href="/service-details">
                    <a>Website Development</a>
                  </Link>
                </h6>
                <p>
                  We help our associates in developing their business by
                  developing a web platform and cultivating a relationship with
                  their users.
                </p>
                <Link href="/service-details">
                  <a className="services-btn">Learn More</a>
                </Link>
                <div className="back-icon">
                  <i className="ri-codepen-line"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="ri-stack-line"></i>
                </div>
                <h6>
                  <Link href="/service-details">
                    <a>Mobile App Development</a>
                  </Link>
                </h6>
                <p>
                  We create rich native apps, delivering flawless apps across
                  the globe in diversity embracing all industries & processes.
                </p>
                <Link href="/MobileService-Details">
                  <a className="services-btn">Learn More</a>
                </Link>
                <div className="back-icon">
                  <i className="ri-stack-line"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="ri-compass-line"></i>
                </div>
                <h6>
                  <Link href="/service-details">
                    <a>Product Engineering Services </a>
                  </Link>
                </h6>
                <p>
                  Application development services help build powerful,
                  digital-ready products with low TCO while parrallely
                  optimizing legacy systems
                </p>
                <Link href="/Product-Engineering-Service">
                  <a className="services-btn">Learn More</a>
                </Link>
                <div className="back-icon">
                  <i className="ri-compass-line"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="ri-code-line"></i>
                </div>
                <h6>
                  <Link href="/service-details">
                    <a>Data Warehousing And BI </a>
                  </Link>
                </h6>
                <p>
                  Our DWBI services help in a wide variety of data services for
                  structured and unstructured data- Data retention,
                  preservation, data enrichment and disposition
                </p>
                <Link href="/Data-warehousing">
                  <a className="services-btn">Learn More</a>
                </Link>
                <div className="back-icon">
                  <i className="ri-code-line"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="ri-computer-line"></i>
                </div>
                <h6>
                  <Link href="/service-details">
                    <a>TESTING</a>
                  </Link>
                </h6>
                <p>
                  We offers great customer experience by delivering quality
                  products in a timely manner.Since quality is non-negotiable,
                  reach our team for great customer experience
                </p>
                <Link href="/Testing">
                  <a className="services-btn">Learn More</a>
                </Link>
                <div className="back-icon">
                  <i className="ri-computer-line"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="ri-code-line"></i>
                </div>
                <h6>
                  <Link href="/service-details">
                    <a>Application Development & Maintenance</a>
                  </Link>
                </h6>
                <p style={{ height: "125px" }}>
                  We address your increased growing demands of your enterprise
                  leads to complexity and unidentified redundancy and will
                  deliver high-quality applications more efficiently.
                </p>
                <Link href="/Application-Development">
                  <a className="services-btn">Learn More</a>
                </Link>
                <div className="back-icon">
                  <i className="ri-code-line"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="ri-code-line"></i>
                </div>
                <h6>
                  <Link href="/Erp">
                    <a>ERP SERVICES</a>
                  </Link>
                </h6>
                <p>
                  Our tried and tested framework helps keep your ERP project on
                  time and on budget. We help in implementing business critical
                  software such as Enterprise Resource Planning (ERP), which can
                  be a major undertaking for any business.
                </p>
                <Link href="/Application-Development">
                  <a className="services-btn">Learn More</a>
                </Link>
                <div className="back-icon">
                  <i className="ri-code-line"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="ri-code-line"></i>
                </div>
                <h6>
                  <Link href="/service-details">
                    <a>Digital Marketing Solutions </a>
                  </Link>
                </h6>
                <p>
                  We help organizations to grow business through online
                  marketing services. We build websites that attract visitors
                  and optimize according to SEO Standards, increase brand
                  identity, generate leads, and advertise on social media
                  platforms.
                </p>
                <Link href="/Digital-Marketing">
                  <a className="services-btn">Learn More</a>
                </Link>
                <div className="back-icon">
                  <i className="ri-code-line"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
