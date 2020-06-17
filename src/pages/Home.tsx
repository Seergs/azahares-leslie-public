import React from "react";

import Landing from "../components/Landing/Landing";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";

export default function Home() {
  return (
    <div>
      <Landing />
      <About />
      <Contact />
    </div>
  );
}
