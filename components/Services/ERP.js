import React from "react";
import Link from "next/link";

const ERP = () => {
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

                <img src="/images/services/erp.jpg" alt="Teza" />

                <h3>Business Strategy</h3>
                <p>
                  Our tried and tested framework helps keep your ERP project on
                  time and on budget. We help in implementing business critical
                  software such as Enterprise Resource Planning (ERP), which can
                  be a major undertaking for any business.
                </p>
                <div>
                  <p>
                    Our experienced team of professionals can help you implement
                    a successful ERP project with our tried and tested
                    framework. We provide comprehensive services to ensure that
                    your project is completed on time and on budget, including
                    implementing Enterprise Resource Planning (ERP) software.
                    Enjoy the benefits of increased efficiency and streamlined
                    processes with our specialized ERP services. The Enterprise
                    Resource Planning (ERP) framework is a tried and tested
                    system, which helps keep your ERP project on time and on
                    budget. We help in implementing business critical software
                    such as Enterprise Resource Planning (ERP), which can be a
                    major undertaking for any business. Our ERP project
                    solutions help you get closer to your business goals. With
                    many years of experience in the industry, our team will work
                    closely with you on a consulting intensive approach to
                    ensure that your software project is implemented according
                    to your defined requirements, timelines and budget. As a
                    trusted partner, we ensure that your project stays on time
                    and within budget. Our ERP implementation services are
                    available in multiple languages and meet the needs of larger
                    organizations as well as smaller companies.
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

export default ERP;
