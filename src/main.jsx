import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastProvider } from "ai-toast";

function Root() {
  // 👉 toast position ko state se control karo
  const [position, setPosition] = useState("top-right");

  return (
    <ToastProvider position={position}>
      {/* App ko position aur setPosition props do */}
      <App position={position} setPosition={setPosition} />
    </ToastProvider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
