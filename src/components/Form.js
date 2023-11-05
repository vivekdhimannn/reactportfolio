import React from 'react'



const Form =()=> {
    return (
        <div className="form">
            <br/>
        <form>
            <label>
                Your Name
            </label><input type="text"></input>
            <label>
                Email
            </label><input type="email"></input>
            <label>
                Subject
            </label><input type="text"></input>
            <label>
                Message
            </label><textarea rows="6" placeholder="Type your message for me here."></textarea>
            <button className="btn-colored"> Submit</button>
        </form>
    </div>
  )
}

export default Form
