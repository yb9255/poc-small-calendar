import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DateContextProvider } from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <DateContextProvider>
      <App />
    </DateContextProvider>
  </React.StrictMode>
);
