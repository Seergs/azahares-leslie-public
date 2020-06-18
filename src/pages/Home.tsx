import React from "react";

import Landing from "../components/Landing/Landing";
import About from "../components/About/About";
import Products from "../components/Products";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Landing />
      <About />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}
