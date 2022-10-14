import React from "react";
import "./lsection.css";
import elipse from "../images/Ellipse.svg";
import lside from "../images/lvector.svg";
import rside from "../images/rvector.svg";
import truckm from "../images/truck.svg";
import turcks from "../images/truck2.svg";
import rent from "../images/Frame.svg";
import Hot from "../images/Hot.svg";
import New from "../images/new.svg";

const Lastsection = () => {
  return (
    <div>
      <div className="main">
        <div className="wrapper1">
          <span className="heading">
            <h1>Trending now !</h1>
          </span>
          <div className="righs">
            <span className="l-side">
              <img src={elipse} alt="" />
              <span className="playsl">
                <img src={lside} alt="" />
              </span>
            </span>
            <span className="r-side">
              <img src={elipse} alt="" />
              <span className="playsr">
                <img src={rside} alt="" />
              </span>
            </span>
          </div>
        </div>




        <div className="swrapper">


        <div className="inerwrapper">
            <div className="cart-outer">
              <div className="imgcontainer">
                <img className="Hotic" src={Hot} alt="" />
              </div>
              <div className="titlec">
                <p className="titlei">Plaaystation 5</p>
                <p className="titler">1 day</p>
                <span className="svg-icon">
                  <img src={truckm} className="truckm" />
                  <img src={turcks} className="truck1" />
                  <img src={turcks} className="truck2" />
                  <img src={turcks} className="truck3" />
                </span>
              </div>
              <div className="bottomcontainer">
                <p className="firstfont">Starts at</p>
                <p className="prise">₹500/Month</p>
                <span className="svg1-container">
                  <img className="btntext" src={rent} alt="" />
                </span>
              </div>
            </div>
            
            <div className="cart-outer">
              <div className="imgcontainer1">
              <img className="Hotic" src={New} alt="" />
              <p className="Hotici">New</p>
              </div>
              <div className="titlec">
                <p className="titlei">Plaaystation 5</p>
                <p className="titler">1 day</p>
                <span className="svg-icon">
                  <img src={truckm} className="truckm" />
                  <img src={turcks} className="truck1" />
                  <img src={turcks} className="truck2" />
                  <img src={turcks} className="truck3" />
                </span>
              </div>
              <div className="bottomcontainer">
                <p className="firstfont">Starts at</p>
                <p className="prise">₹500/Month</p>
                <span className="svg1-container">
                  <img className="btntext" src={rent} alt="" />
                </span>
              </div>
            </div>


            <div className="cart-outer">
              <div className="imgcontainer2"></div>
              <div className="titlec">
                <p className="titlei">Ps 4</p>
                <p className="titler">1 day</p>
                <span className="svg-icon">
                  <img src={truckm} className="truckm" />
                  <img src={turcks} className="truck1" />
                  <img src={turcks} className="truck2" />
                  <img src={turcks} className="truck3" />
                </span>
              </div>
              <div className="bottomcontainer">
                <p className="firstfont">Starts at</p>
                <p className="prise">₹500/Month</p>
                <span className="svg1-container">
                  <img className="btntext" src={rent} alt="" />
                </span>
              </div>
            </div>


            <div className="cart-outer">
              <div className="imgcontainer"></div>
              <div className="titlec">
                <p className="titlei">Plaaystation 5</p>
                <p className="titler">1 day</p>
                <span className="svg-icon">
                  <img src={truckm} className="truckm" />
                  <img src={turcks} className="truck1" />
                  <img src={turcks} className="truck2" />
                  <img src={turcks} className="truck3" />
                </span>
              </div>
              <div className="bottomcontainer">
                <p className="firstfont">Starts at</p>
                <p className="prise">₹500/Month</p>
                <span className="svg1-container">
                  <img className="btntext" src={rent} alt="" />
                </span>
              </div>
            </div>

            <div className="cart-outer">
              <div className="imgcontainer1"></div>
              <div className="titlec">
                <p className="titlei">Plaaystation 5</p>
                <p className="titler">1 day</p>
                <span className="svg-icon">
                  <img src={truckm} className="truckm" />
                  <img src={turcks} className="truck1" />
                  <img src={turcks} className="truck2" />
                  <img src={turcks} className="truck3" />
                </span>
              </div>
              <div className="bottomcontainer">
                <p className="firstfont">Starts at</p>
                <p className="prise">₹500/Month</p>
                <span className="svg1-container">
                  <img className="btntext" src={rent} alt="" />
                </span>
              </div>
            </div>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Lastsection;
