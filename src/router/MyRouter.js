import {Route,Routes}from'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';

const MyRouter = () => {
  return (
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      
     </Routes>
  )
}

export default MyRouter