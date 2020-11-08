import React from "react";
import Nav from "../components/Nav";
import Intro from "../components/Intro";
import Bio from "../components/Bio";
import Contact from "../components/Contact";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Nav />
            <Intro />
            <Bio />
            <Contact />
            <Feedback />
            <Footer />
        </>
    )
}

export default Home;