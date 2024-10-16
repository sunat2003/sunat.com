import React from "react";
import './Home.css';
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import {Navbar} from '../Navnar/Navbar';
import { Skill } from "../Skill/Skill";
import { Project } from "../Projects/Projects";
import { Contact } from "../Contact/Contact";
import { Footer } from "../footer/Footer";

export function Home(){
    return(
        <section className="home-section">
            <Navbar />
            <Hero />
            <About />
            <Skill/>
            <Project />
            <Contact />
            <Footer/>
        </section>
    )
}