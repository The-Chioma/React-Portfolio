import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

import "./App.css";

function App() {
  document.title = "Employee Directory";

  
  return (
    <Router>
        <Navbar/>
        <Header/>
        <Projects/>
        <Footer/>
    </Router>
  );
}

export default App;