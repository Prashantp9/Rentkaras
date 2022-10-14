import React from "react";
import "./navbar.css";
import logo from "../images/logosample 1.svg";
import btnl from "../images/Rectangle 16.svg";
import location from "../images/location.svg";
import searcher from "../images/Vector.svg";
import vector from "../images/Vector2.svg";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="navabar">
        <div className="wrapper">
          <nav>
            <div className="logo1"></div>
            <a className="btn-outside" href="#">
              <span className="location">
                <img src={location} alt="" />
              </span>
              <span className="text">
                <p>Mumbai</p>
              </span>
              <img src={btnl} alt="" />
            </a>
            <div className="search-main">
              <span className="searchtext">
                <input type="text" placeholder="search product" />
              </span>
              <span className="searchbar">
                <img src={searcher} alt="" />
              </span>
            </div>
            <a className="btn-outside2" href="#">
              <span className="location">
                <img src={vector} alt="" />
              </span>
              <span className="text">
                <p>cart</p>
              </span>
              <img src={btnl} alt="" />
            </a>

            <a className="loginbtn" href="#">
              <p>Login/sign up</p>
            </a>
            <div className="bars">
                <FaBars size={40}/>
            
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
