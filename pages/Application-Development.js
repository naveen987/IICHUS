import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import PageBanner from "@/components/Common/PageBanner";
import ApplicationDevelopment from "@/components/Services/ApplicationDevelopment";
import Cta from "@/components/Common/Cta";
import Footer from "@/components/Layout/Footer/Footer";

export default function ServiceDetails() {
  return (
    <>
      <NavbarStyle2 />

      <PageBanner title="Application Development And Maintenance" homeText="Home" homeUrl="/" />

      <ApplicationDevelopment />

      <Cta />

      <Footer />
    </>
  );
}
