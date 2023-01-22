import React from "react";
import Link from 'next/link';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Faq = () => {
  return (
    <>
      <div className="faq-area ptb-100">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div className="faq-content">
                <span>Ask Any Questions</span>
                <h3>
                  Boost Business With Creative Idea & Brand Solutions With Us
                </h3>
                <p>
                We are a thriving company of marketing experts, skilled in brand development and design. Let us help you get started today!
                </p>

                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-6">
                    <div className="faq-info-box">
                      <h3>Clients Satisfied</h3>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "90%" }}
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          90%
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="faq-info-box">
                      <h3>Positive Reviews</h3>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "95%" }}
                          aria-valuenow="95"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          95%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-40">
                  <Link href="/contact">
                    <a className="default-btn">Contact</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="faq-accordion">
                <Accordion preExpanded={['a']}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Company Provides A Full Range of Services?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      Yes, the company provides a full range of services including consulting, design, implementation and support for all of your business needs. The company also offers customized solutions and services tailored to meet the unique needs of each client. With our expertise and experience, we strive to provide the best possible service and solutions for our customers.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How Long It Will Take For Web Development?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      The amount of time it will take to develop a web application will depend on the complexity of the project, the size of the team, the technologies involved, and the timeline of the project. Generally speaking, a basic website can be built in a few weeks or months, while a more complex web application can take 6 months or more to develop.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  {/* <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What About Money Back Guarantee!
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Donec sollicitudin molestie malesuada. Pellentesque in
                        ipsum id orci porta dapibus. Curabitur arcu erat
                        accumsan id imperdiet et porttitor at sem. Nulla
                        porttitor accumsan tincidunt.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem> */}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
