import React from "react";
import { Switch, Route } from "react-router-dom";

import GlobalStyles from "./theme/GlobalStyles";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Switch>
        <Route path="/products" component={Products} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
