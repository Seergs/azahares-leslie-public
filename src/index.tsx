import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import { BrowserRouter } from "react-router-dom";

import App from "./App";

import theme from "./theme/theme";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
