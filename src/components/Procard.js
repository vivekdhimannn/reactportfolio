import React from 'react'
import { NavLink } from 'react-router-dom'

const ProCard = (props) => {
  return (
    <div className="P-card" data-aos="flip-right" >
                <img src={props.imgsource} alt=""/>
                <h1 className="title"> {props.title}</h1>
                <div className="P-details">
                    <p> {props.text}</p>
                    <div className="P-button">
                        <NavLink target="_blank" to={props.view} className="btn-colored"> View</NavLink>
                        <a target="_blank" rel='noreferrer' href={props.source} className="btn-transparent"> Source</a>
                    </div>
                </div>
            </div>
  )
}

export default ProCard
