import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

import "./App.css";

function App() {
  document.title = "Employee Directory";

  
  return (
    <Router>
        <Navbar/>
        <Header/>
        <Project/>
        <Footer/>
    </Router>
  );
}

export default App;