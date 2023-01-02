import React from "react";
import { Link } from "react-router-dom";
import ReturnButton from "./ReturnButton";

const NavFooter = () => {
  return (
    <nav className="NavFooter">
      <div className="backBtn">
        <ReturnButton />
      </div>
    </nav>
  );
};

export default NavFooter;
