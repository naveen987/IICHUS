import React, { useState } from "react";

const EnquiryForm = () => {
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        <h3>Enquiry Form</h3>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        className="pricing-area pt-50 pb-75 justify-content-center"
      >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSc9BQikb12rdc5hE8AFV2rGIoYYtWEt_qU5L763r_w1l7ThDw/viewform?embedded=true"
          width="640"
          height="808"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </>
  );
};

export default EnquiryForm;
