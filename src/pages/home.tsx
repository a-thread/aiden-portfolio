import React from "react";
import Nav from "../components/common/Nav";
import Intro from "../components/home/Intro";
import Bio from "../components/home/Bio";
import Skills from "../components/home/Skills";
import Contact from "../components/home/Contact";
import Feedback from "../components/home/Feedback";
import Footer from "../components/common/Footer";

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