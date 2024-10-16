import React from "react";
import "./Hero.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import photoSunat from "../../image/babul photo.jpg";
import cv from "../../image/Picsart_24-10-15_18-32-35-807.jpg";

export function Hero() {
  const [text] = useTypewriter({
    words: [
      "Frontend Developer",
      "Backend Developer",
      "Web Developer",
      "Django Developer",
    ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 40,
  });
  return (
    <section id="hero" className="hero-section">
      <div className="hero-shade">
        <div className="hero-div">
          <div className="hero-left">
            <h1 className="name-h1">
              I'm <span className="name-span">Sunat Kumar Das</span>
            </h1>
            <h1 className="role-h1">
              <span className="role-span">"{text}"</span>
              <span className="cur-st">
                <Cursor />
              </span>
            </h1>
            <p>
              As a dedicated web developer, I specialize in creating dynamic,
              responsive websites and web applications that provide a seamless
              user experience. With expertise in both front-end and back-end
              technologies, I have successfully built and maintained projects
              ranging from small business websites to large-scale platforms.
            </p>
            <button className="hero-btn">
              <a href={cv} download>
                Downlord My Resume
              </a>
            </button>
          </div>
          <div className="hero-right">
            <img src={photoSunat} alt="uploading" />
          </div>
        </div>
      </div>
    </section>
  );
}
