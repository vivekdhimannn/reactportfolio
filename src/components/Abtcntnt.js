
import react from "../media/react.png"
import React from 'react'
import js from "../media/js.png"
import { Link } from "react-router-dom"

function Abtcntnt() {
  return (
    <div className="about">
      <div className="left">
        <h1>
            About Me
        </h1>
        <span className="bar"></span>
        <h5> I have close to 2 years of experience, I specialize in technologies like ReactJs, NextJs, VueJs, jQuery and javascript along with basic front-end technologies.</h5>
        <Link to="/contact">
            <button className="btn-colored">
                Contact
            </button>
        </Link>

      </div>
      <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={react} alt="true" className="img"/>
            </div>
            <div className="img-stack bottom">
                <img src={js} alt="true" className="img"/>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Abtcntnt
