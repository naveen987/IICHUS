import React from "react";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useRouter } from 'next/router';

const OurServices = () => {
  const router = useRouter();

  const servicePaths = (value,e) =>{
    console.log(value,e,"hit inside func")
    router.push(value)
  }
  const cards = [
    [
      {
        cardImage: "",
        cardHeading: "WEBSITE DEVELOPMENT",
        cardDescripton:
          "We help our associates in developing their business by developing a web platform and cultivating a relationship with their users",
        LearnMoreButton: "Learn More",
        serviceLink: "/service-details",
      },
      {
        cardImage: "",
        cardHeading: "PRODUCT ENGINEERING SERVICES",
        cardDescripton:
          "Application development services help build powerful, digital-ready products with low TCO while simultaneously optimizing legacy systems",
        LearnMoreButton: "Learn More",
        serviceLink: "/Product-Engineering-Service",
      },
      {
        cardImage: "",
        cardHeading: "MOBILE APP DEVELOPMENT",
        cardDescripton:
          "We create rich native apps, delivering flawless apps across the globe in diversity embracing all industries to provide an optimal user experience",
        LearnMoreButton: "Learn More",
        serviceLink: "/MobileService-Details",
      },
      {
        cardImage: "",
        cardHeading: "APPLICATION DEVELOPMENT & MAINTENANCE",
        cardDescripton:
          "We address your increased growing demands of your enterprise leads to complexity and unidentified redundancy",
        LearnMoreButton: "Learn More",
        serviceLink: "/Application-Development",
      },
    ],
    [
      {
        cardImage: "",
        cardHeading: "TESTING",
        cardDescripton:
          "We offers great customer experience by delivering quality products in a timely manner.Since quality is non-negotiable, reach our team for great customer experience",
        LearnMoreButton: "Learn More",
        serviceLink: "/Testing",
      },
      {
        cardImage: "",
        cardHeading: "DATA WAREHOUSING AND BI",
        cardDescripton:
          "Our DWBI services help in a wide variety of data services for structured and unstructured data- Data retention, preservation, data enrichment and disposition ensuring the data security",
        LearnMoreButton: "Learn More",
        serviceLink: "/Data-warehousing",
      },
      {
        cardImage: "",
        cardHeading: "DIGITAL MARKETING SOLUTIONS",
        cardDescripton:
          " We help organization's to grow business through online marketing services. We build websites that attract visitors and optimize according to SEO Standards for variety audience.",
        LearnMoreButton: "Learn More",
        serviceLink: "/Digital-Marketing",
      },
      {
        cardImage: "",
        cardHeading: "ERP SERVICES",
        cardDescripton:
          "Our tried and tested framework helps keep your ERP project on time and on budget. We help in implementing business critical software such as Enterprise Resource Planning (ERP).",
        LearnMoreButton: "Learn More",
        serviceLink: "/Erp",
      },
    ],
  ];

  return (
    <>
      <div className="services-area ptb-100">
        <div className="section-title">
          <span>Our Services</span>
          <h2>Get Benefit And More With Our Excelent Services</h2>
        </div>
        <Carousel showArrows={true}>
          {cards.map((item) => {
            return (
              <div className="row justify-content-center">
                <div className="col-sm-3">
                  <div className="single-services-card">
                    <div className="icon">
                      <i className="ri-cast-line"></i>
                    </div>
                    <h6>
                      <Link href="/service-details">
                        <a style={{ width: "103%" }}>{item[0]?.cardHeading}</a>
                      </Link>
                    </h6>
                    <p>{item[0]?.cardDescripton}</p>
                      <a  style={{cursor:"pointer"}} onClick={(e)=>{
                        servicePaths(item[0].serviceLink,e)
                      }}  className="services-btn">{item[0]?.LearnMoreButton}</a>
                  </div>
                </div>

                <div className="col-sm-3">
                  <div className="single-services-card">
                    <div className="icon color-two">
                      <i className="ri-codepen-fill"></i>
                    </div>
                    <h6>
                      <Link  href="/service-details">
                        <a style={{ width: "103%" }}>{item[1]?.cardHeading}</a>
                      </Link>
                    </h6>
                    <p>{item[1]?.cardDescripton}</p>
                      <a style={{cursor:"pointer"}} onClick={(e)=>{
                        servicePaths(item[1].serviceLink,e)
                      }} className="services-btn">
                        {item[1]?.LearnMoreButton}
                      </a>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="single-services-card">
                    <div className="icon color-three">
                      <i className="ri-stack-line"></i>
                    </div>
                    <h6>
                      <Link href="/service-details">
                        <a style={{ width: "103%" }}>{item[2]?.cardHeading}</a>
                      </Link>
                    </h6>
                    <p>{item[2]?.cardDescripton}</p>
                      <a style={{cursor:"pointer"}} onClick={(e)=>{
                        servicePaths(item[2].serviceLink,e)
                      }} className="services-btn">{item[2]?.LearnMoreButton}</a>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="single-services-card">
                    <div className="icon color-three">
                      <i className="ri-stack-line"></i>
                    </div>
                    <h6>
                      <Link href="/service-details">
                        <a style={{ width: "103%" }}>{item[3]?.cardHeading}</a>
                      </Link>
                    </h6>
                    <p>{item[3]?.cardDescripton}</p>
                      <a style={{cursor:"pointer"}} onClick={(e)=>{
                        servicePaths(item[3].serviceLink,e)
                      }} className="services-btn">{item[3]?.LearnMoreButton}</a>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
        <div className="view-more-btn">
          <Link href="/services">
            <a className="default-btn">View More</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default OurServices;
