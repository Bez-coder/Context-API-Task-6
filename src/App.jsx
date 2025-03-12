import React from "react";
import { useUserAuth } from "./components/UserAuthContext"; // Import the context
import "./App.css";

function App() {
  const { isLoggedIn, toggleAuth } = useUserAuth();

  return (
    <div className="App">
      <h1>Welcome!</h1>
      <p>{isLoggedIn ? "You are logged in!" : "You are logged out."}</p>
      <button onClick={toggleAuth}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default App;
