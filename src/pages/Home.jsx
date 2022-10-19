import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../component/banner/Banner";
import Course from "../component/courses/Course";
import { getCourseCategoryActions } from "../redux/actions/CourseCategoryActions";

function Home() {
  const {category}=useSelector((state)=>state.category)
    const dispatch=useDispatch()
   useEffect(() => {
     dispatch(getCourseCategoryActions())
    }, [])
    console.log(category);

  return (
    <>
      <Banner />
        {
          category.map((cat,index)=>(
            <Course key={index} catId={cat.id} courseName={cat.name}/>
          ))
        }
     
    
    </>
  )

}
export default Home;