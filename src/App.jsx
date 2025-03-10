import React from "react";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Contact from "./components/Contact.jsx";
import Login from "./components/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import "./App.css";
function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      {/* 
      <Hero />
      <Contact />
      <About />
     
      <Portfolio />

      <Login /> */}
    </div>
  );
}

export default App;
