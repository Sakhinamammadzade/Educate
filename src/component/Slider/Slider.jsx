import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import'../Slider/slider.scss'
import CardContent from '../CardContent/CardContent';
function Slider  ({catName}) {
    return (
      <>
      <h1>{catName}</h1>
        <Swiper>
        
           <SwiperSlide >
                 <CardContent second={catName} />
          </SwiperSlide>
          <SwiperSlide >
                 <CardContent/>
          </SwiperSlide>
          <SwiperSlide >
                 <CardContent/>
          </SwiperSlide>
         
      </Swiper>
      </>
    
    )
}

export default Slider
