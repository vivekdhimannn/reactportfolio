import React from 'react';
import Intro from '../media/bg1.jpg';
import { Link } from 'react-router-dom';
import myPDF from '../media/Resume.pdf'

const Front = () => {
    return (
        <>
            <div className='front'>
                <div className='mask'>
                    <img className='frontbg' src={Intro} alt="FrontImage" />
                </div>
                <div className='content animate__animated animate__zoomIn'>
                    <p className="srveal animate__animated animate__lightSpeedInRight" >Hi, I am Vivek Dhiman.</p>
                    <h1 className="srveal animate__animated animate__flip animate__slow 2s" >Front-End Developer</h1>
                    <div className="srveal" data-aos="fade-left" data-aos-anchor-placement="bottom-bottom">
                        <Link to="/projects" className='btn-colored'>Projects</Link>
                        <Link to="/contact" className='btn-transparent'>Contact</Link> <br />
                        <a href={myPDF} download="My_Resume.pdf"><button className="btnn">Download Resume</button></a>
                    </div>
                </div>
            </div></>
    )
}

export default Front