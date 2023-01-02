import React, { useState } from "react";
import naviIcon from "./images/naviIcon.png";
import { Link } from "react-router-dom";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`mobile-nav ${isOpen ? "animate" : ""} `}
      style={{
        position: "absolute",
        left: isOpen ? 0 : "-300px",
        maxWidth: "300px"
      }}
    >
      {!isOpen && (
        <button onClick={toggleNav}>
          <img className="naviIcon" src={naviIcon} alt="naviIcon" />
        </button>
      )}
      {isOpen && (
        <div>
          <button onClick={toggleNav}>
            <img className="naviIcon" src={naviIcon} alt="naviIcon" />
          </button>
          <ul>
            <li onClick={toggleNav}>
              <Link to="/">முகப்பு</Link>
            </li>
            <li onClick={toggleNav}>
              <Link to="/brief">செய்தி சுருக்கம்</Link>
            </li>
            <li onClick={toggleNav}>
              <Link to="/science">அறிவியல்</Link>
            </li>
            <li onClick={toggleNav}>
              <Link to="/puzzles">புதிர்கள்</Link>
            </li>
            <li onClick={toggleNav}>
              <Link to="/abnormal">அமானுடம்</Link>
            </li>
            <li onClick={toggleNav}>
              <Link to="/scholars">மேதைகள்</Link>
            </li>
            <li onClick={toggleNav}>
              <Link to="/history">வரலாறுகள்</Link>
            </li>
            <li onClick={toggleNav}>
              <Link to="/mystery">வினோதங்கள்</Link>
            </li>
            <li onClick={toggleNav}>
              <Link to="/others">ஏனையவை</Link>
            </li>
          </ul>
          <div className="hider" onClick={toggleNav}>
            hider
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileNav;
