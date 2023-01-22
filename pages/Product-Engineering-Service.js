import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import PageBanner from "@/components/Common/PageBanner";
import ProductEngineeringServices from "@/components/Services/productEngineerinServices";
import Cta from "@/components/Common/Cta";
import Footer from "@/components/Layout/Footer/Footer";

export default function ServiceDetails() {
  return (
    <>
      <NavbarStyle2 />

      <PageBanner title="Product Engineering Services" homeText="Home" homeUrl="/" />

      <ProductEngineeringServices />

      <Cta />

      <Footer />
    </>
  );
}
