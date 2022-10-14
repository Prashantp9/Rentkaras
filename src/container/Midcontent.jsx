import React from 'react'
import "./mcontent.css"
import mpost from "../images/mposter.jpg"
import gpay from "../images/play.svg"
import Lastsection from '../container/Lastsection';

const Midcontent = () => {
  return (
    <>
    <div className='board'>
        <div className='poster'>
        </div>
        <div className="horiflow">
            <div className='boxes'>
            <span className='gplay'>
                    <img src={gpay} alt="" />
                </span>
                <span className='title'>
                    <p>Music</p>
                </span>   
            </div>

            <div className='boxes'>
                <span className='gplay'>
                    <img src={gpay} alt="" />
                </span>
                <span className='title'>
                    <p>console</p>
                </span>
            </div>

            <div className='boxes'>
            <span className='gplay'>
                    <img src={gpay} alt="" />
                </span>
                <span className='title'>
                    <p>Laptop</p>
                </span>

            </div>

            <div className='boxes'>
            <span className='gplay'>
                    <img src={gpay} alt="" />
                </span>
                <span className='title'>
                    <p>gaming</p>
                </span>
            </div>
            <div className='boxes'>
            <span className='gplay'>
                    <img src={gpay} alt="" />
                </span>
                <span className='title'>
                    <p>cameras</p>
                </span>
            </div>
            <div className='boxes'>
            <span className='gplay'>
                    <img src={gpay} alt="" />
                </span>
                <span className='title'>
                    <p>consoles</p>
                </span>
            </div>
        </div>
        <Lastsection/>
        
         
       </div>
    </>
  )
}

export default Midcontent