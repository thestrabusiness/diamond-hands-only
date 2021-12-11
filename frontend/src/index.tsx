import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { DAppProvider } from "@usedapp/core";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider
      config={{
        multicallAddresses: {
          "31337": "0x5fbdb2315678afecb367f032d93f642f64180aa3",
        },
      }}
    >
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
