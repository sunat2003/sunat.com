import React, { useEffect } from "react";
import "./About.css";
import { SlCalender } from "react-icons/sl";
import { FaChevronRight } from "react-icons/fa";
import Aos from "aos";
import 'aos/dist/aos.css';

export function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section id="about" className="about-section">
      <h1>About Me</h1>
      <hr />
      <div data-aos="fade-up" className="about-contaits">
        <div className="profile-div">
          <h2>Profile</h2>
          <p>
            "To Utilize My Technical Skills for achieving the target and
            developing the best performance in the organization. and upgrade my
            skills so I could participate in the organization’s growth.
            Innovative Software Engineer proficient in Python programming,
            dedicated to leveraging advanced technical skills to drive business
            success in the Software Engineering field."
          </p>
        </div>

        <h2 data-aos="fade-up">Education Details</h2>
        <div data-aos="fade-up" className="education-div">
          <div data-aos="fade-up" className="edu-box">
            <h3>Master of Computer Application</h3>
            <ul>
              <li>
                {" "}
                <FaChevronRight className="about-icons" />
                United School of Business Mangement
              </li>
              <li>
                <FaChevronRight className="about-icons" />
                <SlCalender className="d-icons" />
                Duration(2023-2025)
              </li>
              <li>
                {" "}
                <FaChevronRight className="about-icons" />
                Status: Pursuing
              </li>
            </ul>
          </div>
          <div data-aos="fade-up" className="edu-box">
            <h3>Graguation</h3>
            <ul>
              <li>
                {" "}
                <FaChevronRight className="about-icons" />
                Kendrapara Auto. College
              </li>
              <li>
                <FaChevronRight className="about-icons" />
                <SlCalender className="d-icons" />
                Duration(2020-2023)
              </li>
              <li>
                {" "}
                <FaChevronRight className="about-icons" /> Marks: 84%
              </li>
              <li>
                <FaChevronRight className="about-icons" /> Status:Completed
              </li>
            </ul>
          </div>
          <div data-aos="fade-up" className="edu-box">
            <h3>12th</h3>
            <ul>
              <li>
                {" "}
                <FaChevronRight className="about-icons" /> Kendrapara Higher
                Secondary School
              </li>
              <li>
                <FaChevronRight className="about-icons" />
                <SlCalender className="d-icons" />
                Duration(2018-2020)
              </li>
              <li>
                <FaChevronRight className="about-icons" /> Marks: 86%
              </li>
              <li>
                <FaChevronRight className="about-icons" /> Status:Completed
              </li>
            </ul>
          </div>
          <div data-aos="fade-up" className="edu-box">
            <h3>10th</h3>
            <ul>
              <li>
                <FaChevronRight className="about-icons" /> Port Trust High
                School
              </li>
              <li>
                <FaChevronRight className="about-icons" />
                <SlCalender className="d-icons" />
                Duration(2017-2018)
              </li>
              <li>
                <FaChevronRight className="about-icons" /> Marks: 84%
              </li>
              <li>
                <FaChevronRight className="about-icons" /> Status:Completed
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
