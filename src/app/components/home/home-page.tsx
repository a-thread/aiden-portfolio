import React from "react";
import Intro from "./components/Intro";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Feedback from "./components/Feedback";
import Nav from "../nav";
import Footer from "../footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Intro />
      <Bio />
      <Skills />
      <Feedback />
      <Contact />
      <Footer />
    </>
  );
};
