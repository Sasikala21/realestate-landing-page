import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import HeroSection from "../components/hero/hero";
import Project from "../projects/projectsSection/projectSection";
import styles from "./projects.module.css";
const Projects = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <div className={styles.projects}>
            <Project />
            </div>
            <Footer />
        </div>
    )
};

export default Projects;
