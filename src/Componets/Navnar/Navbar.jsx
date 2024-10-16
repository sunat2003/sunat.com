import React, { useRef, useState } from "react";
import "./Navbar.css";
import { IoMenuOutline } from "react-icons/io5";
import userPhoto from "../../image/babul photo.jpg";
import { FaHome } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { GoProjectSymlink } from "react-icons/go";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import AnchorLink from "react-anchor-link-smooth-scroll";

export function Navbar() {
  const [toggleStyle,setTogglestyle]=useState({right:"-80%"});
  
  function handeNavToggleClick(){
    setTogglestyle(
      {
        right:"0px"
      }
    )
  }
  function handleNavCloseClick(){
    setTogglestyle(
      {
        right:"-80%"
      }
    )
  }
  window.addEventListener('scroll', handleNavCloseClick);
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Portfolio.</h1>
      </div>
      <ul className="menu-bar">
        <li>
        <AnchorLink className="link" offset={50} href="#hero">Home</AnchorLink>
        </li>
        <li>
          <AnchorLink className="link" offset={50} href="#about">About</AnchorLink>
        </li>
        <li>
        <AnchorLink className="link" offset={50} href="#skill">Services</AnchorLink>
        </li>
        <li>
        <AnchorLink className="link" offset={50} href="#project">Projects</AnchorLink>
        </li>
      </ul>
      <div className="end-nav">
        <button className="nav-btn">
        <AnchorLink className="link new-link" offset={50} href="#contact">Contact Me</AnchorLink>
        </button>
        <IoMenuOutline className="menu-icons" onClick={handeNavToggleClick} />
      </div>

      <div className="toggle-div" style={toggleStyle}>
        <div className="user-logo">
          <img src={userPhoto} alt="" />
        </div>
        <h1 className="logo-name">Sunat Kumar Das</h1>
        <ul className="toggle-nav">
          <li className="toggle-li">
            <FaHome className="toggle-icons" />
            <AnchorLink className="link" offset={50} href="#hero">Home</AnchorLink>
          </li>
          <li className="toggle-li">
            <FaAddressBook className="toggle-icons" />
            <AnchorLink className="link" offset={50} href="#about">About</AnchorLink>
          </li>
          <li className="toggle-li">
            <GrTechnology />
            <AnchorLink className="link" offset={50} href="#skill">Services</AnchorLink>
          </li>
          <li className="toggle-li">
            <GoProjectSymlink />
            <AnchorLink className="link" offset={50} href="#project">Projects</AnchorLink>
          </li>
        </ul>

        <div className="social-box">
          <a className="s-box" href="https://www.linkedin.com/in/sunat-kumar-das-a188732b0?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BGBnqADoZRDG8b9yQf95jSg%3D%3D">
          <FaLinkedinIn className="s-icons" />
          </a>
          <a className="s-box" href="https://github.com/sunat2003">
          <FaGithub className="s-icons" />
          </a>
          <a className="s-box" href="https://www.facebook.com/babul.skdas/">
          <FaFacebookF className="s-icons" />
          </a>
          <a className="s-box" href="https://www.instagram.com/_babul_07_/">
          <FaInstagram className="s-icons" />
          </a>
        </div>

        <IoClose className="close-btn" onClick={handleNavCloseClick} />
      </div>
    </nav>
  );
}
