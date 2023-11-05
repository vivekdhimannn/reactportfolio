import React from 'react'
import Abtcntnt from '../components/Abtcntnt'
import { Belowfront } from '../components/Belowfront'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
const About =()=> {
  return (
    <> 
    <div>
    <Navbar/> 
    <Belowfront heading="About Me" text="I am Vivek Dhiman a B.Tech graduate Front-End Developer. I create responsive websites and webapps."/>
    <Abtcntnt/>
    <Footer/>
    </div>
    </>
  )
}

export default About