import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";


function Navbar() {
  const [Menu, setMenu] = useState(false);
  const handleOnClick = () => setMenu(!Menu);
  const [BgColor, setBgColor] = useState(false);
const changeBgColor = ()=>{
  if (window.scrollY>=100){
    setBgColor(true);
  }
  else{
    setBgColor(false)
  }
};
window.addEventListener("scroll", changeBgColor);
  return (
    <>  
        <div className={BgColor ? "Head Head-bg":"Head"}>
          <Link to="/">
            <h1>Portfolio</h1>
          </Link>
          <ul className={Menu? "list active":"list"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact Me</Link>
            </li>
          </ul>
          <div className="menuClose" onClick={handleOnClick}>
            {Menu ? (
              <FaTimes size={25} style={{ color: "#fff" }} />
            ) : (
              <FaBars size={25} style={{ color: "#fff" }} />
            )}
          </div>
        </div>
    </>
  );
};

export default Navbar;
