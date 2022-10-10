import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Banner from "../component/banner/Banner";
import Course from "../component/courses/Course";
import Slider from "../component/Slider/Slider";
import { getCourseActions } from "../redux/actions/CourseActions";




function Home() {
  const course=useSelector((state)=>state)
    const dispatch=useDispatch()
   useEffect(() => {
     dispatch(getCourseActions())
    
   }, [])

  return (
    <>
      <Banner />
       <Slider catName={"c#"}/>
       <Course/>
    
    </>
  )

}
export default Home;