import * as React from "react";
import Intro from "./components/Intro";
import Bio from "./components/Bio";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import PortContainer from "./components/PortContainer"


function App() {
  return (
    <>
      <Intro />
      <Bio />
      <PortContainer />
      <Contact />
      <Testimonials />
    </>
  );
}

export default App;
