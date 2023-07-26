import React from 'react'
import '../styles/Header.css'
import '../styles/App.css'


const Header = () => {
  return (
     <section className='h-wrapper'>
     <div className='flexes paddings innerWidth h-container'>
      <img src="logo.png" alt="logo" />
      <div className=" flexes h-menu">
        <a href="">Residencies</a>
        <a href="">Our Value</a>
        <a href="">Contact Us</a>
        <a href="">Get Started</a>
        <button className='button'>
        <a href="">Contact</a>
        </button>
        
      </div>
     </div>
     
     </section>
   
    
     
    
  )
}

export default Header