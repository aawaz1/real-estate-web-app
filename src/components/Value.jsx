import React, { useState, useCallback } from 'react'
import{
   Accordion,AccordionItem,
   AccordionItemHeading,
   AccordionItemButton, 
   AccordionItemPanel,
   AccordionItemState
} 
from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md'
import { icons } from 'react-icons';
import '../styles/Value.css'
import '../styles/App.css'
import data from '../styles/accordion';

const Item = ({item,i}) => {

    const [className,setClassName] = useState(null)
        return (
            <AccordionItem className={' accordionItem ${className}'} key={i} uuid={i}>
                <AccordionItemHeading>
                    <AccordionItemButton className=' flexes accordionButton'>
                        <AccordionItemState className='expanded'>
                            {({ expanded })=> 
                            expanded ? setClassName("expanded")
                             : setClassName("collapsed")}
                        </AccordionItemState>
                        <div className="flexes icon">
                            {item.icon}
                        </div>
                        <span className="primaryText">
                            {item.heading}
                        </span>
                        <div className="flexes icon">
                            <MdOutlineArrowDropDown size={20}/>

                            
                        </div>
                    </AccordionItemButton>

                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                </AccordionItemPanel>
            </AccordionItem>
        )
    
    
        }
const Value = () => {
    
  return (
   <section className="v-wrapper">
    <div className="paddings innerWidth flexes v-container">
        <div className="v-left">
            <div className="image-container">
                <img src="./value.png" alt="" />

            </div>
        </div>
        <div className="flexColStart v-right">
            <span className='orangeText'>Our Value</span>
            <span className='primaryText'>Value We Give To You</span>
            <span className='secondaryText'>We always ready to help in providing services for you. <br />
                 We believe a good place to live can make your life better
            </span>
            <Accordion 
            className='accordion'
            allowMultipleExpanded={false}
            preExpanded={[0]}
            >
                
               {data.map((item,i) => <Item key={i} item ={item}  i = {i}/>  )} 
               
                    




            </Accordion>
        </div>
    </div>
   </section>
   
  );

};

export default Value