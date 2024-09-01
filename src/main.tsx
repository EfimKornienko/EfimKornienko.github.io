import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/app";
import { WebApp } from "./shared/twa-adapter";

WebApp.ready();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
