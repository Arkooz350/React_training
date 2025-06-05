import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import imageLogment from "./assets/logment.jpg"
import imageGarage from "./assets/garage.jpg"
import imagepizza from "./assets/boutiquepizza.jpg"

createRoot(document.getElementById("root")).render(
   // <StrictMode>
    <App />
   // </StrictMode> 
);
