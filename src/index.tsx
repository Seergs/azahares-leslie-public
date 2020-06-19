import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import App from "./App";

import theme from "./theme/theme";

const stripePromise = loadStripe(
  "pk_test_51GunXcDDSmd0ca0UOkUbvoaqaDBTXRTVhArV2k49p7SXp966aXoX7aHbEU4TUp47jnyqtCGW5pMnq17fr98tyOYu00oahR3kIL"
);

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
