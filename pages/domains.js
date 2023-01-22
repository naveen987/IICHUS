import React from "react";
import NavbarStyle2 from "@/components/Layout/Navbar/NavbarStyle2";
import PageBanner from "@/components/Common/PageBanner";
import Domains from "@/components/Domains/Domain"
import Footer from "@/components/Layout/Footer/Footer";

export default function Contact() {
  return (
    <>
      <NavbarStyle2 />

      <PageBanner title="Domains" homeText="Home" homeUrl="/" />

      <Domains />      

      <Footer />
    </>
  );
}
