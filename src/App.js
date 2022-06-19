import './App.css';
import PreNavbar from "./components/PreNavbar"
import Navbar from "./components/Navbar"
import NavOptions from "./components/NavOptions.js"
import Slider from "./components/Slider"
import Offers from "./components/Offers"
import Heading from "./components/Heading.js"
import StarProducts from "./components/StarProducts.js"
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js"
import HotAccessories from "./components/HotAccessories.js"
import ProductReviews from "./components/ProductReviews.js"
import Videos from "./components/Videos.js"
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"
import jsonData from "./data/data.js"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <Router>
      <PreNavbar/>
      <Navbar/>
      <NavOptions miPhones={jsonData.miPhones} redmiPhones = {jsonData.redmiPhones} tv={jsonData.tv} laptop={jsonData.laptop} fitnessAndLifeStyle = {jsonData.fitnessAndLifeStyle} home={jsonData.home} audio = {jsonData.audio} accessories={jsonData.accessories}/>
      <Slider start = {jsonData.banner.start}/>
      <Offers offers = {jsonData.offer}/>
      <Heading text = "STAR PRODUCTS"/>
      <StarProducts starProduct = {jsonData.starProduct}/>
      <Heading text = "HOT ACCESSORIES"/>
      <HotAccessoriesMenu/>
      <Routes>
        <Route exact path="/music" element={<HotAccessories music={jsonData.hotAccessories.music} musicCover={jsonData.hotAccessoriesCover.music} />} />
      </Routes>
      <Routes>
        <Route exact path="/smartDevice" element={<HotAccessories smartDevice={jsonData.hotAccessories.smartDevice} smartDeviceCover={jsonData.hotAccessoriesCover.smartDevice} />} />
      </Routes>
      <Routes>
        <Route exact path="/home" element={<HotAccessories home={jsonData.hotAccessories.home} homeCover={jsonData.hotAccessoriesCover.home} />} />
      </Routes>
      <Routes>
        <Route exact path="/lifeStyle" element={<HotAccessories lifeStyle={jsonData.hotAccessories.lifeStyle} lifeStyleCover={jsonData.hotAccessoriesCover.lifeStyle} />} />
      </Routes>
      <Routes>
        <Route exact path="/mobileAccessories" element={<HotAccessories mobileAccessories={jsonData.hotAccessories.mobileAccessories} mobileAccessoriesCover={jsonData.hotAccessoriesCover.mobileAccessories} />} />
      </Routes>
      <Heading text = "PROODUCT REVIEWS"/>
      <ProductReviews productReviews={jsonData.productReviews}/>
      <Heading text = "VIDEOS"/>
      <Videos videos={jsonData.videos}/>
      <Heading text = "IN THE PRESS"/>
      <Banner banner={jsonData.banner}/>
      <Footer footer={jsonData.footer}/>

    </Router>
  );
}

export default App;
