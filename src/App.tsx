import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Bio from "./components/Bio";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";


function App() {
  return (
    <Router>
      <Navbar />
      <Intro />
      <Bio />
      <Contact />
      <Testimonials />
    </Router>

  );
}

export default App;
