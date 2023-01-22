import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import PageBanner from "@/components/Common/PageBanner";
import DigitalMarketing from "@/components/Services/DigitalMarketing";
import Cta from "@/components/Common/Cta";
import Footer from "@/components/Layout/Footer/Footer";

export default function ServiceDetails() {
  return (
    <>
      <NavbarStyle2 />

      <PageBanner title="Digital Marketing solution" homeText="Home" homeUrl="/" />

      <DigitalMarketing />

      <Cta />

      <Footer />
    </>
  );
}
