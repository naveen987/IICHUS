import React from "react";
import Link from "next/link";

const DataWarehousing = () => {
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

                <img src="../images/services/datawarehouse.jpg" alt="Teza" />

                <h3>Business Strategy</h3>
                <p>
                  Our DWBI services help in a wide variety of data services for
                  structured and unstructured data- Data retention,
                  preservation, data enrichment and disposition.
                </p>
                <div>
                  <p>
                    Our Data Warehousing and Business Intelligence (DWBI)
                    services provide comprehensive solutions to help
                    organizations manage and leverage their structured and
                    unstructured data. Our services include data retention,
                    preservation, data enrichment and disposition, ensuring that
                    your data is secure and accessible. With our expertise and
                    knowledge, you can rest assured that your data is being
                    properly managed and utilized. DWBI offers a complete set of
                    technological solutions for the processing and management of
                    data for scientific and business purposes. Our main
                    activities include Demand Driven Retention services,
                    including an intensive data capture, data processing and
                    preparation for access to data and metadata; Unstructured
                    Data Treatment services tailored to your needs and
                    requirements; Data Analysis and Integration services to
                    provide solutions based on the analysis of structured and
                    unstructured data; Metadata Management Services with
                    functions ranging from creation to management of metadata
                    added by users in Content Management Systems such as
                    SharePoint or ERP systems; as well as Data Disposition
                    services designed to manage archived structured or
                    unstructured datasets through audit trails or production
                    reports based on your needs.
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

export default DataWarehousing;
