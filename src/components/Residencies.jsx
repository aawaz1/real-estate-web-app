import React from 'react'
import{Swiper,SwiperSlide,useSwiper} from 'swiper/react'
import 'swiper/css'
import { sliderSettings } from './common'
import '../styles/Residencies.css'
import data from '../styles/slider.json'
const Residencies = () => {
  return (
   <section className="r-wrapper">
    <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
            <span className='orangeText'>Best Choices</span>
            <span className='primaryText'>Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
            <SliderButtons/>
            
            {
            data.map((card,i)=>(
                <SwiperSlide key={i}>
                    <div className=" flexColStart r-card">
                        <img src={card.image} alt="home" />
                        <span className="secondaryText r-price">
                            <span>$</span><span>{card.price}</span>
                        </span>
                        <span className='primaryText'>{card.name}</span>
                        <span className='secondaryText'>{card.name}</span>
                        <span className='Text'>{card.detail}</span>
                        

                        

                    </div>
                </SwiperSlide>

            

            ))
            }

        </Swiper>
    </div>
   </section>
  )
}

export default Residencies;
const SliderButtons = () => {
    const swiper = useSwiper()
    return(
        <div className="flexzone r-button">
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}