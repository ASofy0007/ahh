import React from "react";
import "./App.css";

import { Header, Footer, Soup, Lista, ControlPanel } from "./components";

function App() {
  return (
    <div id="container">
      <Header />
      <main className="main-content">
        <ControlPanel />
        <Soup />
        <Lista />
      </main>
      <Footer />
    </div>
  );
}

export default App;
