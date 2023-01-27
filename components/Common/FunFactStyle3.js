import React from "react";

const FunFactStyle3 = () => {
  return (
    <>
      <div className="fun-fact-area bg-three pt-100 pb-75" style={{
            backgroundImage: `url("../images/funfact/funfact-bg-3.jpg")`,
          }}>
        <div className="container">
          <div className="section-title">
            <span className="section-title">Our value</span>
            <h2>Achieving international leadership in IT services by providing high-quality products and services.</h2>
          </div>

          <div className="row" style={{display:"flex"}}>
          <div style={{width:"50%"}}>
            <span className="ourValuesTitle">Our MISSION</span>
            <p className="overValueTitleParagrapg">To deliver measurable, long-term results for our clients by combining our expertise with their insight and experience. To maintain a high level of professional rigour throughout the engagement, from inception to final delivery.</p>
          </div>
          <div style={{width:"50%"}}>
            <span className="ourValuesTitle">Our VALUES</span>
            <p className="overValueTitleParagrapg">We believe that progress and development make life and business more exciting and challenging. We’re constantly learning, growing, taking action, and surrounded by smart, ambitious, and inspiring people. We are all about achieving new levels of personal and business success.</p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFactStyle3;
