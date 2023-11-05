import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import React from 'react'
import { Belowfront } from '../components/Belowfront'
import Form from '../components/Form'

function Contact() {
  return (
    <> <div> <Navbar/> 
    <Belowfront heading="Contact Me" text="Let's Have A Chat"/>
    <Form/>
    <Footer/></div></>
  )
}

export default Contact;