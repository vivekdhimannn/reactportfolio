import React from "react";
import { FaGit, FaHome, FaInstagram, FaLinkedinIn, FaMailBulk, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left" data-aos="fade-up">
          <div className="location">
            <FaHome
              size={20}
              style={{ color: "aliceblue", marginRight: "2rem" }}
              className="animate__animated animate__pulse animate__infinite infinite"
            />
          
          <div>
            <p>127/1, Sugarmill Colony
              <br/>YamunaNagar, 135001</p>
          </div>
          </div>
          <div className="phone ">
            <p>
              <FaWhatsapp
                size={20}
                style={{ color: "aliceblue ", marginRight: "2rem" }}
                className="animate__animated animate__pulse animate__infinite infinite"
              />
              +917015046541
            </p>
          </div>
          <div className="email">
            <p>
              <FaMailBulk
                size={20}
                style={{ color: "aliceblue ", marginRight: "2rem" }}
                className="animate__animated animate__pulse animate__infinite infinite"
              />
              Dhimanvivek10@gmail.com
            </p>
          </div>
        </div>
        <div className="right" data-aos="fade-down">
        <h4> About Me</h4>
        <p>
          Hi this is Vivek Dhiman. I'm a B.Tech graduate working professional and a technology
          enthusiast. I am working as a Front-End Developer and have close to 2 years of experience. I am good with technologies like React, Next and vue js for Front-End.
        </p>
        <div className="social">
            <a  href="https://www.linkedin.com/in/vivekdhimann"target="_blank" rel="noreferrer">
            <FaLinkedinIn className="animate__animated animate__pulse animate__infinite infinite"  size={30} style={{ color: "aliceblue ", marginRight: "1rem" }}/>
            </a>
            <a  href="https://github.com/vivekdhimannn/frontend/tree/reactapps"target="_blank" rel="noreferrer">
            <FaGit className="animate__animated animate__pulse animate__infinite infinite"  size={30} style={{ color: "aliceblue ", marginRight: "1rem" }}/></a>
            <a  href="https://www.instagram.com/vivekdhimann/" target="_blank" rel="noreferrer">
            <FaInstagram className="animate__animated animate__pulse animate__infinite infinite" size={30} style={{ color: "aliceblue ", marginRight: "1rem" }}/></a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
