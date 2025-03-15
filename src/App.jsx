import React from "react";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Contact from "./components/Contact.jsx";
import Login from "./components/login.jsx";
import Navbar from "./components/Navbar.jsx";
import "./App.css";
import LoginForm from "./components/login/Login-signup.jsx";
function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <LoginForm/>
      {/* 
      <Login />
      
      <Contact />
      <About />
     
      <Portfolio /> */}

    </div>
  );
}

export default App;
