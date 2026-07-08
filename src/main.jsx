import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ThemeProvider } from "./context/ThemeContext";
import { Toaster } from "react-hot-toast";
import "./index.css";
import App from "./App";
const basename = import.meta.env.PROD ? "/modern-food-store" : "";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <ThemeProvider>
        <BrowserRouter basename={basename}>
          <App />
          <Toaster position="top-center" />
        </BrowserRouter>
      </ThemeProvider>
    </CartProvider>
  </StrictMode>,
);
