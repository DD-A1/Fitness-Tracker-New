import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./auth/AuthContext";
import { BrowserRouter } from "react-router";
import { PageProvider } from "./layout/PageContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PageProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </PageProvider>
  </BrowserRouter>,
);
