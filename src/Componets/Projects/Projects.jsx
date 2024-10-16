import React from "react";
import "./Projects.css";
import pro1 from "../../image/project-1.png";
import pro2 from "../../image/project-2.png";
import pro3 from "../../image/project-3.png";
import pro4 from "../../image/project-4.png";
import pro5 from "../../image/project-5.png";
import pro6 from "../../image/project-6.png";
import pro7 from "../../image/project-7.png";
import pro8 from "../../image/project-8.png";

var projects = [
  {
    id: 1,
    image: pro1,
    name: "Video Meeting Project",
    tech:"Django,ZegoCloud,Html,Css,Js,Sqllite3 etc.",
    description:
      "Implemented a simple video meeting application using Django and Zegocloud along with user authentication and authorization features.It's easy – simply create a link and share with people you want to join the call. No sign ups required. If you don't have Skype installed, that's ok, you can enjoy it on your browser. Invite up to 99 people (plus you) and enjoy free video calls using Skype.",
    sourceCode: "https://github.com/sunat2003/Video-Meeting-App-Django",
    liveLink: "http://Sunat2003.pythonanywhere.com",
  },
  {
    id: 2,
    image: pro2,
    name: "Content Creation App",
    tech:"Django,Html,Css,Js,Sqllite3 etc.",
    description:
      "Implemented content creation ,listing ,deletion ,searching and updating with user authentication and authorization.Apps that provide access to information (e.g., search engines, video libraries, and digital galleries).",
    sourceCode: "https://github.com/sunat2003/Content-Create-Project-Djnago",
    liveLink: "",
  },
  {
    id: 3,
    image: pro3,
    name: "Odisha Tourism",
    tech:"React,Html,Css etc.",
    description: "Developed a traveling application using React.The ideal months to take a trip to Puri are between October and February when neither the scorching heat nor the high humidity is present to cause any hindrance to your outdoor plans. Winters (December-February) are a bit cold, but good to enjoy the beach and visiting temples.",
    sourceCode: "https://github.com/sunat2003/Odisha-Tourism-App",
    liveLink: "https://sunat2003.github.io/Odisha-Tourism-App/",
  },
  {
    id: 4,
    image: pro4,
    name: "E-commerce Website",
    tech:"Html,Css,JavaScript etc.",
    description: "Developed a e-commerce website using HTML , CSS and JS.An e-commerce website is an online store that allows customers to buy and sell products and services over the internet. It's a virtual storefront that functions similarly to a physical store, with product listings, categories, customer reviews, and a cash register",
    sourceCode: "https://github.com/sunat2003/e-Commerce-website-Repo",
    liveLink: "https://sunat2003.github.io/e-Commerce-website-Repo/",
  },
  {
    id: 5,
    image: pro5,
    name: "Netflix Clone App",
    tech:"React,Html,Css,JavaScript etc.",
    description: "Clone Netflix home page and login page using React.A Netflix clone project is a digital platform that mimics the user experience and core functionality of the streaming service Netflix. The project allows users to access a large library of movies, TV shows, documentaries, and other video content for on-demand streaming.",
    sourceCode: "https://github.com/sunat2003/Netflix-HomePage-Clone-React",
    liveLink: "https://sunat2003.github.io/Netflix-HomePage-Clone-React/",
  },
  {
    id: 6,
    image: pro6,
    tech:"Html,Css,JavaScript etc.",
    name: "Currency Converter",
    description: "Developed a Currency Converter app using React.A currency converter project is a software program that converts the value of one currency to another based on current exchange rates. Here are some currency converter projects: ",
    sourceCode: "https://github.com/sunat2003/Js-USD-To-Any-Currency-Coverter",
    liveLink: "https://sunat2003.github.io/Js-USD-To-Any-Currency-Coverter/",
  },
  {
    id: 7,
    image: pro7,
    name: "React Redux ToDo App",
    tech:"React,React Redux,Html,Css etc.",
    description: "Developed a To-Do application using React Redux.A to-do app is a tool that helps you manage your tasks and stay organized. Here are some to-do apps.A task management app that helps you plan your day, set reminders, and take notes. You can also use it to sync tasks and reminders between Outlook and To Do.",
    sourceCode: "https://github.com/sunat2003/React-Redux-ToDo-app-Repo",
    liveLink: "https://sunat2003.github.io/React-Redux-ToDo-app-Repo/",
  },
  {
    id: 8,
    image: pro8,
    name: "Employee Management System",
    tech:"Django,Html,Css etc.",
    description:
      "Designed to store employee details ,add ,remove ,update ,filter, and list employees.An employee management system or EMS is a tool that helps improve employee satisfaction and productivity to help a company achieve their overall goals. These tools help monitor, assess and control employees' working hours and efficiently utilise human resources.",
    sourceCode: "https://github.com/sunat2003/EmployeeManagement_Django_Repo",
    liveLink: "",
  },
];

export function Project() {
  return (
    <section id="project" className="project-section">
      <h1>My Work</h1>
      <hr />
      <div className="projects-div">
        {projects.map((data) => (
          <div key={data.id} className="each-project">
            <div className="left-div">
              <h3>{data.name}</h3>
              <p><span>Tech:</span> {data.tech}</p>
              <p><span>Description:</span> {data.description}</p>
              <div className="projects-btn">
                <button className="p-btn">
                  <a href={data.liveLink}>Check Out</a>
                </button>
                <button className="p-btn">
                  <a href={data.sourceCode}>GitHub</a>
                </button>
              </div>
            </div>
            <div className="right-div">
              <img src={data.image} alt="" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
