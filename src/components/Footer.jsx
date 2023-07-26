import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="innerWidth paddings flexes f-container">
            <div className="flexColStart f-left">
                <img src="./logo2.png" alt=""width={120}/>
                <span className="secondaryText">
                    Our vision to make all people <br />
                    believe that they are having the best place  for them.
                </span>
                </div>
                <div className="flexColStart f-right">
                    <span className='primaryText'>Information</span>
                    <span>145 NYC , NY, America</span>
                    <div className="flexes f-menu">
                        <span>Property</span>
                        <span>Services</span>
                        <span>Product</span>
                        <span>About Us</span>
                    </div>
                </div>
        </div>
    </section>
  )
}

export default Footer