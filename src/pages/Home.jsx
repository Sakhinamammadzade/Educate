import Banner from "../component/banner/Banner";
import Slider from "../component/Slider/Slider";




function Home() {
  return (
    <>
      <Banner />
      <Slider catName={"c#"}/>
      <Slider catName={"c++"}/>
      <Slider catName={"c"}/>
    </>
  )

}
export default Home;