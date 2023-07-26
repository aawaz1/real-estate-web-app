import React from 'react'
import '../styles/Hero.css'
import '../styles/App.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
import {motion} from 'framer-motion'
const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexes hero-container">
            <div className=" flexColStart hero-left">
                <div className=" hero-title">
                <div className='orange-circle'/>
                <h1>
                
                    Discover <br/>Most Suitable <br/>Property
                </h1>

                </div>
                <div className=" flexColStart1 hero-desc">
                    <span className='secondaryText'>Find a variety of Properties that suit you very easily
                        </span><span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
                </div>
                <div className=" flexes search-bar">
                    <HiLocationMarker color='--blue' size={25}/>
                    <input type="text" />
                    <button className='button'>Search</button>
                    
                  
                </div>
                <div className="flexes stats">
                    <div className="flexColCentre stat">
                        <span><CountUp start={8800} end={9000} duration={6}/><span>+
                            </span></span><span className='secondaryText'>Premium Products</span>
                    </div>
                    <div className="flexColCentre stat">
                        <span><CountUp start={1800} end={2000} duration={6}/><span>+
                            </span></span><span className='secondaryText'>Happy Customers</span>
                    </div>
                    <div className="flexColCentre stat">
                        <span><CountUp start={10} end={37} duration={6}/><span>+
                            </span></span><span className='secondaryText'>Awards</span>
                    </div>
                </div>
            </div>
            {/* /* right side */ }
            <div className="flexColEnd1 hero-right">
               <div className="image-container">
                <img src="./hero-image.png" alt="" />
               </div>
            </div>

        </div>
    </section>
  )
}

export default Hero