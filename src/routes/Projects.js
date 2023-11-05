import React from 'react'
import { Belowfront } from '../components/Belowfront'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Projct from '../components/Projct'

const Projects =()=> {
  return (
    <> <div> <Navbar/> 
    <Belowfront heading="PROJECTS" text="Some of my most recent works shown below"/>
    <Projct/>
    <Footer/></div></>
  )
}

export default Projects