import React from "react";
import ReactDOM from "react-dom/client"; // Ensure correct import
import App from "./App";
import { UserAuthProvider } from "./components/UserAuthContext"; // Correct import path

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserAuthProvider> 
    <App />
  </UserAuthProvider>
);
