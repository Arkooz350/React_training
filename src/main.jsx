import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <link href="/src/style.css" rel="stylesheet"></link>
    <App />
  </StrictMode>
);
