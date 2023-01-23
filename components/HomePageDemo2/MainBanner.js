import React, { useState } from "react";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const MainBanner = () => {
  const [carouselSelect,setCarouselSelect] = useState(0)
  const handleonChange = (index) =>{
    setCarouselSelect(index)
  }
  console.log(carouselSelect,"hit carouselSelect")
  return (
    <>
      <Carousel showThumbs={false} onChange={(index)=> handleonChange(index)} showArrows={true}>
        <div
          className="main-hero-area"
          style={{
            backgroundImage: `url("/images/main-hero/new-home-page-banner-1.JPG")`,
            height:"610px"
          }}
        >
          <div className="container-fluid">
            <div className="main-hero-content" style={{ textAlign: "initial" }}>
              <span
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                IT Solutions Company
              </span>
              {carouselSelect ? carouselSelect === 0 : true && <h1
                className="test-animation"
                data-aos="fade-right"
                data-aos-delay="70"
                data-aos-duration="700"
                data-aos-once="true"
                style={{ fontSize: "40px" }}
              >
                We are pioneers in delivering customized business IT Solutions.
              </h1>}
              <ul
                className="hero-btn"
                data-aos="fade-right"
                data-aos-delay="90"
                data-aos-duration="900"
                data-aos-once="true"
              >
                <li>
                  <Link href="/contact">
                    <a className="default-btn">Get A Quote</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className="optional-btn">Learn More</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>


        </div>
        <div
          className="main-hero-area"
          style={{
            backgroundImage: `url("/images/main-hero/new-home-page-banner-2.JPG")`,
          }}
        >
          <div className="container-fluid">
            <div className="main-hero-content" style={{ textAlign: "initial" }}>
              <span
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                IT Solutions Company
              </span>
             {carouselSelect && carouselSelect === 1 && <h1
                className="test-animation"
                data-aos="fade-right"
                data-aos-delay="70"
                data-aos-duration="700"
                data-aos-once="true"
                style={{ fontSize: "40px" }}
              >
                We are pioneers in delivering customized business IT Solutions.
              </h1>}
              <p
                data-aos="fade-right"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                Digital marketing solutions is everything you need for your
                business.
              </p>

              <ul
                className="hero-btn"
                data-aos="fade-right"
                data-aos-delay="90"
                data-aos-duration="900"
                data-aos-once="true"
              >
                <li>
                  <Link href="/contact">
                    <a className="default-btn">Get A Quote</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className="optional-btn">Learn More</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="main-hero-shape-1">
            <img src="/images/main-hero/shape-1.png" alt="Teza" />
          </div>
          <div className="main-hero-shape-2">
            <img src="/images/main-hero/shape-2.png" alt="Teza" />
          </div>
        </div>
        <div
          className="main-hero-area"
          style={{
            backgroundImage: `url("/images/main-hero/new-home-page-banner-3.JPG")`,
          }}
        >
          <div className="container-fluid">
            <div className="main-hero-content" style={{ textAlign: "initial" }}>
              <span
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                IT Solutions Company
              </span>
              {carouselSelect && carouselSelect === 2 &&<h1
                className="test-animation"
                data-aos="fade-right"
                data-aos-delay="70"
                data-aos-duration="700"
                data-aos-once="true"
                style={{ fontSize: "40px" }}
              >
                We are pioneers in delivering customized business IT Solutions.
              </h1>}
              <p
                data-aos="fade-right"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                Everything We Do is Driven by Digital marketing solutions.
              </p>

              <ul
                className="hero-btn"
                data-aos="fade-right"
                data-aos-delay="90"
                data-aos-duration="900"
                data-aos-once="true"
              >
                <li>
                  <Link href="/contact">
                    <a className="default-btn">Get A Quote</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className="optional-btn">Learn More</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="main-hero-shape-1">
            <img src="/images/main-hero/shape-1.png" alt="Teza" />
          </div>
          <div className="main-hero-shape-2">
            <img src="/images/main-hero/shape-2.png" alt="Teza" />
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default MainBanner;
