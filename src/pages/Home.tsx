import React from "react";
import Features from "../components/Features/Features";
import Gallery from "../components/Gallery/Gallery";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Phone from "../components/Hero/Phone";

export default function Home() {
  return (
    <>
      <Hero />
      <Phone />
      <Features />
      <Gallery />
      <Footer />
    </>
  );
}
