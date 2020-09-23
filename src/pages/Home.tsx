import React from "react";
import Features from "../components/Features/Features";
import Gallery from "../components/Gallery/Gallery";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Gallery />
      <Footer />
    </>
  );
}
