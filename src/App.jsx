import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Contact from "./components/Contact.jsx";
import Login from "./components/login.jsx";
import Chup from "./components/chup.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Contact />
      <Chup />
      <Portfolio />
      <Login />
    </div>
  );
}

export default App;
