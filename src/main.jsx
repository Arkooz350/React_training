import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Decouverte from "./Pages/Search.jsx";

createRoot(document.getElementById("root")).render(
   <StrictMode>
    <App />
    </StrictMode> 
);
