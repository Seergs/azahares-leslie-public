import React from "react";
import { Switch, Route } from "react-router-dom";

import GlobalStyles from "./theme/GlobalStyles";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
