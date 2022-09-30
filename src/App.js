import { BrowserRouter } from "react-router-dom";
import Banner from "./component/banner/Banner";
import Card from "./component/Card/Card";
import Header from "./component/header/Header";
import Home from "./pages/Home";

import MyRouter from "./router/MyRouter";



function App() {
  return (
      <>
       <BrowserRouter>
       <Header/>
       <MyRouter/>
       
       </BrowserRouter>
     
   
      </>
  );
}

export default App;
