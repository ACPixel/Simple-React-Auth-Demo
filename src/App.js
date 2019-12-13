import React from "react";
import "./App.css";
import Index from "./components/Index";

import { AuthProvider } from "./components/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Index />
    </AuthProvider>
  );
}

export default App;
