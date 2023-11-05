import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Form =()=> {
    
    const form = useRef();
    const [fv, setFv] = useState({
        user_name: '',
        user_email: '',
        message: ''
    })
    function handleChange(e){
        setFv({
            ...fv,
            [e.target.name]:[e.target.value]
        })
        console.log("formdata",fv)
    }


  const sendEmail = (e) => {
    e.preventDefault();
    
    if(!fv?.user_name){
        toast.error("enter correct name")
    }
    if(!fv?.user_email){
        toast.error("enter correct Email")
    }
    if(!fv?.message){
        toast.error("enter message")
    }
    else{
        toast.success("Message Sent")
    }

    emailjs.sendForm('service_wwd8seb', 'template_oqjmp0h', form.current, 'k254MCH8OQ6o8lB7u')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

    return (
        <div className="form">
            <br/>
        <form ref={form} onSubmit={sendEmail}>
            <label>
                Your Name
            </label>
            <input onChange={handleChange} required type="text" name='user_name'></input>
            <label>
                Email
            </label>
            <input onChange={handleChange} required type="email" name='user_email'></input>
            <label>
                Subject
            </label>
            <input  required type="text"></input>
            <label>
                Message
            </label>
            <textarea onChange={handleChange} required rows="6" placeholder="Type your message for me here." name='message'>
            </textarea>
            <button type='submit' className="btn-colored"> Submit</button>
            <ToastContainer />
        </form>
    </div>
  )
}

export default Form
