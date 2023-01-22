import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import PageBanner from "@/components/Common/PageBanner";
import EnquiryForm from "@/components/EnquiryForm/Enquiry";
import Faq from '@/components/Common/Faq';
import Footer from "@/components/Layout/Footer/Footer";

export default function PricingPage() {
  return (
    <>
      <NavbarStyle2 />

      <PageBanner title="Our Pricing" homeText="Home" homeUrl="/" />

      <EnquiryForm />

      <Faq />
      
      <Footer />
    </>
  );
}
