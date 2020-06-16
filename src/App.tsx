import React from "react";

import GlobalStyles from "./theme/GlobalStyles";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
