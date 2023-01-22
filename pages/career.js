import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import PageBanner from "@/components/Common/PageBanner";
import Career from "@/components/Career/career"
import Footer from "@/components/Layout/Footer/Footer";

export default function Contact() {
  return (
    <>
      <NavbarStyle2 />

      <PageBanner title="Career" homeText="Home" homeUrl="/" />

      <Career />      

      <Footer />
    </>
  );
}
