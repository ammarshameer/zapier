import React from "react";
import '../../App.css'
import { FaArrowRight } from "react-icons/fa";
import image1 from './Images/TemImage1.avif'
import image2 from './Images/TemImage2.avif'
import image3 from './Images/TemImage3.avif'
import image4 from './Images/TemImage4.avif'
import image5 from './Images/TemImage5.avif'
import image6 from './Images/TemImage6.avif'
import image7 from './Images/TemImage1_logo.avif'
import image8 from './Images/TemImage2_logo.avif'
import image9 from './Images/TemImage3_logo.avif'
import image10 from './Images/TemImage4_logo.avif'


const Templates = () => {
    // const images=[
    //     image1,
    //     image2,
    //     image3,
    //     image4,
    //     image5,
    //     image6,
    //     image7,
    //     image8,
    //     image9
    // ]
  return (
    <div className="mt-5">
      <div className="templateDiv">
      <h1>Get started quickly with these best-practice templates</h1>
      <p>
        No need to start from scratch. In just a few minutes, you can use&nbsp;
         <span>Interfaces</span>, <span>Tables</span>, and <span>Zaps</span> to create complete solutions and reclaim
        countless hours of your time.
      </p>
      <div className="btnSpan">Show:
        <span>AI automation</span>
        <span>Lead management</span>
        <span>Sales</span>
        <span>Marketing</span>
        <span>Support</span>
        <span>Finance</span>
        <span>HR</span>
       </div>
      </div>
      <div className="templateCardParentDiv mt-5">
        <div className="templateCardDiv">
            <img src={image1} alt="example" width="375"/>
            <div className="temContentDiv"><img src={image7} alt="example" width="30"/>
            <h4 className="my-4">Draft email replies to customers</h4>
            <a className="ankerTag" href="/">Get Started <FaArrowRight  className="arrowRight"/></a></div>
        </div>
        <div className="templateCardDiv">
            <img src={image2} alt="example" width="375"/>
            <div className="temContentDiv"><img src={image8} alt="example" width="30"/>
            <h4 className="my-4">Draft email replies to customers</h4>
            <a className="ankerTag" href="/">Get Started <FaArrowRight className="arrowRight"/></a></div>
        </div>
        <div className="templateCardDiv">
            <img src={image3} alt="example" width="375"/>
            <div className="temContentDiv"><img src={image9} alt="example" width="30"/>
            <h4 className="my-4">Draft email replies to customers</h4>
            <a className="ankerTag" href="/">Get Started <FaArrowRight className="arrowRight"/></a> </div>
        </div>
        <div className="templateCardDiv">
            <img src={image4} alt="example" width="375"/>
            <div className="temContentDiv"><img src={image10} alt="example" width="30"/>
            <h4 className="my-4">Draft email replies to customers</h4>
            <a className="ankerTag" href="/">Get Started <FaArrowRight className="arrowRight"/></a> </div>
        </div>
        <div className="templateCardDiv">
            <img src={image5} alt="example" width="375"/>
            <div className="temContentDiv"><img src={image7} alt="example" width="30"/>
            <h4 className="my-4">Draft email replies to customers</h4>
            <a className="ankerTag" href="/">Get Started <FaArrowRight className="arrowRight"/></a> </div>
        </div>
        <div className="templateCardDiv">
            <img src={image6} alt="example" width="375"/>
            <div className="temContentDiv"><img src={image7} alt="example" width="30"/>
            <h4 className="my-4">Draft email replies to customers</h4>
            <a className="ankerTag" href="/">Get Started <FaArrowRight className="arrowRight"/></a> </div>
        </div>
      </div>
      <div className="btnDiv mt-4"><button className="templatesBtn">Explore all templates</button></div>
      
    </div>
  );
};

export default Templates;
