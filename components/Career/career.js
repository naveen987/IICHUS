import React, { useState } from "react";

const Career = () => {
  const [{ items }, setItems] = useState({ items: [] });
  const addItem = () => {
    items.push(
      <div key={items.length}>
        <div
          style={{
            width: "320px",
            backgroundColor: "#7eb3462b",
            padding: "10px",
            maxHeight: "170px",
            marginBottom: "40px",
            borderRadius: "4px",
          }}
        >
          <h3>Cloud Architect</h3>
          <p>date</p>
          <button
            style={{
              backgroundColor: "#7eb346",
              color: "#ffffff",
              width: "117px",
              height: "40px",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Apply Now
          </button>
        </div>
      </div>
    );
    setItems({ items: [...items] });
  };

  const handleGoogleform = () => {};

  const cards = [
    {
      cardImage: "",
      cardHeading: "Cloud Architect",
      cardDescripton: "date",
      button: "Apply Now",
    },
    {
      cardImage: "",
      cardHeading: "Software Engineer",
      cardDescripton: "date",
      button: "Apply Now",
    },
    {
      cardImage: "",
      cardHeading: "Test Engineer",
      cardDescripton: "date",
      button: "Apply Now",
    },
  ];
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="about-content">
                <h3>Careers At IIHCUS</h3>
                <p>
                  At IIHCUS Technology, we don't just focus on the project at
                  hand. We're here to build trust and create long-term success
                  for our customers. We make sure to understand their individual
                  needs and use our expertise, skills, and passion to help them
                  reach their goals. We not only provide the best in industry
                  solutions, but take each opportunity to learn from our
                  customers. We understand the potential of technology to
                  generate real results and make a real difference for
                  businesses.
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
                <img src="../images/about/about-1.png" alt="Teza" />
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <h3>Careers</h3>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexFlow: "wrap",
              marginTop: "20px",
            }}
          >
            {cards.map((items) => {
              return (
                <div
                  style={{
                    width: "320px",
                    backgroundColor: "#7eb3462b",
                    padding: "10px",
                    maxHeight: "170px",
                    marginBottom: "40px",
                    borderRadius: "4px",
                  }}
                >
                  <h3>{items.cardHeading}</h3>
                  <p>{items.cardDescripton}</p>
                  <a
                    style={{
                      backgroundColor: "#7eb346",
                      color: "#ffffff",
                      width: "117px",
                      height: "40px",
                      border: "none",
                      borderRadius: "4px",
                      display:"flex",
                      justifyContent:"center"
                    }}
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeUCz-RqBsEa-DAqvWzesT4MBHtMZLBcgupR274ywk_X0Y2mw/viewform?embedded=true"
                    target="IFrame"
                  >
                    <p style={{padding:"4px"}}>{items.button}</p>
                  </a>
                </div>
              );
            })}
          </div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexFlow: "wrap",
              }}
            >
              {items}
            </div>
            <button
              style={{
                backgroundColor: "#7eb346",
                color: "#ffffff",
                width: "117px",
                height: "40px",
                border: "none",
                borderRadius: "4px",
                marginBottom: "6px",
              }}
              onClick={addItem}
            >
              Add card
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
