import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";

import App from "./App";

import Card from "./item_card";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <App />
  </>
);
