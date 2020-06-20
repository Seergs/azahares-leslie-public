import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import App from "./App";

import theme from "./theme/theme";

const stripePromise = loadStripe("pk_live_eiz0QvdgoeQcRzkYZBvpIKWk00RW6xjxb0");

ReactDOM.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Elements>
  </React.StrictMode>,
  document.getElementById("root")
);
