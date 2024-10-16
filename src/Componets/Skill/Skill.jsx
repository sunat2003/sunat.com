import React from "react";
import "./Skill.css";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { SiBootstrap } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiOracle } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiPythonanywhere } from "react-icons/si";

export function Skill() {
  return (
    <div id="skill" className="skill-section">
      <div className="skill-shade">
      <h1>Skills</h1>
      <div className="skill-div">
        <h3>Frontend</h3>
        <div className="skill-spin">
          <div className="skill-icons-div">
            <SiHtml5 className="skill-icons html-logo" />
          </div>
          <div className="skill-icons-div css-logo">
            <SiCss3 className="skill-icons" />
          </div>
          <div className="skill-icons-div">
            <SiJavascript className="skill-icons js-logo" />
          </div>
          <div className="skill-icons-div">
            <GrReactjs className="skill-icons react-logo" />
          </div>
          <div className="skill-icons-div">
            <SiBootstrap className="skill-icons bootstrap-logo" />
          </div>
          <div className="skill-icons-div">
            <SiTailwindcss className="skill-icons tailwind-logo" />
          </div>
        </div>

        <h3>Backend</h3>
        <div className="skill-spin">
          <div className="skill-icons-div">
            <FaJava className="skill-icons java-logo" />
          </div>
          <div className="skill-icons-div">
            <SiPython className="skill-icons python-logo" />
          </div>
          <div className="skill-icons-div">
            <SiDjango className="skill-icons django-logo" />
          </div>
          <div className="skill-icons-div">
            <SiOracle className="skill-icons oracle-logo" />
          </div>
        </div>

        <h3>Tools</h3>
        <div className="skill-spin">
          <div className="skill-icons-div">
            <FaGithub className="skill-icons github-logo" />
          </div>
          <div className="skill-icons-div">
            <FaGitAlt className="skill-icons git-logo" />
          </div>
          <div className="skill-icons-div">
            <SiPythonanywhere className="skill-icons pad-logo" />
          </div>
        </div>
      </div>
      </div>
      <div className="animation-div"></div>
      <div className="animation2-div"></div>
    </div>
  );
}
