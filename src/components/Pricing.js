import React from 'react'
import { Link } from "react-router-dom"

const Pricing = () => {
  return (
    <div className="pricing">
        <h1 className="hding"> Pricing for freelance</h1>
        <span className="bar"></span>
        <div className="container">
            <div className="card">
                <h3>-Basic-</h3>
                <span className="bar"></span>
                <p className="btc"> ₹2000 </p>
                <p>-3 Days-</p>
                <p>-3 Pages-</p>
                <p>-Featured-</p>
                <p>-Responsive Design-</p>
                <Link className="btn-colored"> Purchase Now</Link>

            </div>
            <div className="card">
                <h3>-Premium-</h3>
                <span className="bar"></span>
                <p className="btc"> ₹6000 </p>
                <p>-2 Days-</p>
                <p>-5 Pages-</p>
                <p>-Featured-</p>
                <p>-Responsive Design-</p>
                <Link className="btn-colored"> Purchase Now</Link>

            </div>
            <div className="card">
                <h3>-Business-</h3>
                <span className="bar"></span>
                <p className="btc"> ₹10000 </p>
                <p>-5 Days-</p>
                <p>-8 Pages-</p>
                <p>-Featured-</p>
                <p>-Responsive Design-</p>
                <Link className="btn-colored"> Purchase Now</Link>

            </div>
        </div>
      
    </div>
  )
}

export default Pricing
