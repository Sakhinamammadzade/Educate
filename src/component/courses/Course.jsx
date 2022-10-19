import React, { useEffect } from 'react';
import '../courses/Course.scss';
import{Swiper,SwiperSlide} from'swiper/react';
import 'swiper/css';
import { useDispatch, useSelector } from 'react-redux';
import { getCourseContentAction } from '../../redux/actions/CourseContentAction';
import CourseCard from '../CourseCart/CourseCart';

function Course ({catId, courseName}){
   const { courses_content} = useSelector((state) => state.courses_content)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getCourseContentAction())
   }, [])
   // console.log(courses_content);

  return (
   <div>
      
      <Swiper
                spaceBetween={20}
                slidesPerView={4}
            >
                {
                    courses_content&&
                    courses_content.filter(x=>x.categoryId == catId).map((course, index) => (
                        <SwiperSlide key={index}>
                            <CourseCard courseId={course.courseId} contentName={course.courseName} coursePhoto={course.photoUrl} courseAuhtor={course.authorName} />
                        </SwiperSlide>
                    ))
                }

            </Swiper>
   </div>
  )
}

export default Course