import React from 'react'
import '../styles/Contact.css'
import { MdCall } from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatAlt} from 'react-icons/hi'

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings  flexes just  innerWidth c-container">
        {/* left side */}
        <div className=" flexColStart c-left">
          <span className='orangeText'>Our Conact</span><span className='primaryText'>Easy to Contact Us</span>
          <span className='secondaryText'>Always ready to help by providing the best service. <br />
          Best in class</span>
          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexColStart row">
              <div className="flexColCentre mode">
                <div className="flexStart">
                  <div className="flexes icons">
                    <MdCall size={25}/>
                  </div>
                  <div className="flexColStart detail">
                    <span>Call</span>
                    <span>865987651</span>
                  </div>

                </div>
                <div className=" flexes button">
                  Call Now
                </div>

                </div>
                <div className="flexColCentre mode">
                <div className="flexStart">
                  <div className="flexes icons">
                    <BsFillChatDotsFill size={25}/>
                  </div>
                  <div className="flexColStart detail">
                    <span>Chat</span>
                    <span>865987651</span>
                  </div>

                </div>
                <div className=" flexes button">
                  Chat Now
                </div>

                </div>
              </div>
              <div className="flexColStart row">
              <div className="flexColCentre mode">
                <div className="flexStart">
                  <div className="flexes icons">
                    <BsFillChatDotsFill size={25}/>
                  </div>
                  <div className="flexColStart detail">
                    <span>Video Call</span>
                    <span>865987651</span>
                  </div>

                </div>
                <div className=" flexes button">
                  Video Call Now
                </div>

                </div>
                <div className="flexColCentre mode">
                <div className="flexStart">
                  <div className="flexes icons">
                    <HiChatAlt size={25}/>
                  </div>
                  <div className="flexColStart detail">
                    <span>SMS</span>
                    <span>865987551</span>
                  </div>

                </div>
                <div className=" flexes button">
                  SMS Now
                </div>

                </div>
              </div>
            </div>
        </div>
        
        
        {/* right side */}
        <div className="c-right ">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact