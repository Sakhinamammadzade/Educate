import {Route,Routes}from'react-router-dom';
import NoMatches from '../component/NoMatches';
import About from '../pages/About';
import Auth from '../pages/Auth';
import CourseDetail from '../pages/CourseDetail';
import CreateCourse from '../pages/CreateCourse';

import Home from '../pages/Home';


const MyRouter = () => {
  return (
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about/:id" element={<About/>}/>
      <Route path='/detail/:id' element={<CourseDetail/>}/>
      <Route path='/auth/' element={<Auth />}/>
      <Route path="/createcourse/" element={<CreateCourse />} />
      {/* <Route path='*' element={<NoMatches/>}/> */}
       
     </Routes>
  )
}

export default MyRouter