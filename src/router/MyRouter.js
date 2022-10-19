
import {Route,Routes}from'react-router-dom';
import About from '../pages/About';
import CourseDetail from '../pages/CourseDetail';
import Home from '../pages/Home';

const MyRouter = () => {
  return (
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path='/detail/:id' element={<CourseDetail/>}/>
      
     </Routes>
  )
}

export default MyRouter