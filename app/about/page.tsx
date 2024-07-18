import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import SectionOne from "../components/hero/sectionOne";
import HeroSection from "../components/hero/hero";
import SectionTwo from "../components/hero/sectionTwo";
const About = () => {
    return (
        <div>
            <Header/>
            <HeroSection/>
            <SectionOne/>
            <SectionTwo/>
            <Footer/>
        </div>
    )
};

export default About;
