import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import './Contact.css';
import { useState } from "react";
export function Contact(){
    const [msg,setmsg]=useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "0267d3c1-0e21-4cc0-8aad-c48eab3461b4");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            alert("Request Submitted");
        }
        setmsg("Your request Submitted Successfully");
      };
    return(
        <section id="contact" className="contact-section">
            <h1>Contact With Me</h1>
            <hr />
            <div className="contac-details">
                <div className="contact-left">
                   <h1>Let's talk</h1>
                   <p>If you have a website, it might not seem like the page you need to prioritize, but that’s a huge mistake, especially considering that it’s one of the most valuable pages on your website and, typically, one of the most visited site pages.</p>
                    <p className="contact-logo"><BiLogoGmail />sunatkumar516@gmail.com</p>
                    <p className="contact-logo"><FaPhoneAlt />+91 6370822753</p>
                    <p className="contact-logo"><FaLocationDot />Bhubaneswer,Odisha</p>
                </div>
                <div className="contact-right">
                   <form onSubmit={onSubmit} className="contact-form">
                     <p data-aos="fade-up" style={{color:"green"}}>{msg}</p>
                      <label>Your Name</label>
                      <input type="text" placeholder="Enter Your Name" name="name" />
                      <label>Enter Your Email</label>
                      <input type="email" placeholder="Enter Your Email" email="email" />
                      <label>Enter Your Message</label>
                      <textarea row="20" col="20" placeholder="Enter Your Message" name="message"></textarea>
                      <button type="submit" className="contact-btn">Submit</button>
                   </form>
                </div>
            </div>
        </section>
    )
}