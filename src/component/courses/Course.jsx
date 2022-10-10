import React from 'react';
import '../courses/Course.scss';
import{Swiper,SwiperSlide} from'swiper/react';
import 'swiper/css';
import CourseCart from '../CourseCart/CourseCart';

function Course (){
  return (
   <div>
    <Swiper
       spaceBetween={0}
       slidesPerView={6}>
       <SwiperSlide>
          <CourseCart/>
       </SwiperSlide>
    
    </Swiper>
   </div>
  )
}

export default Course