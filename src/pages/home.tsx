import React from "react";
import Nav from "../components/Nav";
import Intro from "../components/Intro";
import Bio from "../components/Bio";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";

function Home() {
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
    )
}

export default Home;