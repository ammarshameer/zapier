
import './App.css';
import NavBar from './Components/Nav-Bar/NavBar';
import  Hero  from "./Components/Hero-Section/Hero";
import HomePageVideo1 from "./Components/HomePageVideo1/Video1"
import ScrollRight from './Components/ScrollRight/ScrollRight';
import Templates from './Components/Templates/Templates';
import FixedImageScroll from './Components/FixedImageScroll/FixedImageScroll';


function App() {
  return (
   <>
   <NavBar />
   <Hero/>
   <HomePageVideo1/>
   <ScrollRight/>
   <Templates/>
   <FixedImageScroll/>
   </>
  );
}

export default App;
