import { BrowserRouter } from "react-router-dom";
import Banner from "./component/banner/Banner";
import { Provider } from "react-redux";
import Card from "./component/Card/Card";
import Header from "./component/header/Header";
import Home from "./pages/Home";
import MyRouter from "./router/MyRouter";
import store from "./redux/Store";


function App() {
  return (
      <>
      <Provider store={store}>
      <BrowserRouter>
     
       <MyRouter/>
       </BrowserRouter>
       
      </Provider>
      </>
  );
}

export default App;
