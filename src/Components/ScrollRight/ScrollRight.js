import React, { useEffect, useRef } from 'react'
import '../../App.css'
import image1 from './Images/image1.svg'
import image2 from './Images/image2.svg'
import image3 from './Images/image3.svg'
import image4 from './Images/image4.svg'
import image5 from './Images/image5.svg'
import image6 from './Images/image6.svg'
import image7 from './Images/image7.svg'
import image8 from './Images/image8.svg'
import image9 from './Images/image9.svg'
import image10 from './Images/image10.svg'
import image11 from './Images/image11.svg'
import image12 from './Images/image12.svg'
import image13 from './Images/image13.svg'
import image14 from './Images/image14.svg'
import image15 from './Images/image15.svg'
import image16 from './Images/image16.svg'
import image17 from './Images/image17.svg'
import image18 from './Images/image18.svg'
import image19 from './Images/image19.svg'



const ScrollRight = () => {
    const scrollerRef = useRef(null);

    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
        image11,
        image12,
        image13,
        image14,
        image15,
        image16,
        image17,
        image18,
        image19,

      ];
      useEffect(() => {
        const scroller = scrollerRef.current;
        const totalWidth = scroller.scrollWidth / 2;
    
        const scroll = () => {
          if (scroller.scrollLeft >= totalWidth) {
            scroller.scrollLeft = 0;
          } else {
            scroller.scrollLeft += 1;
          }
        };
        const intervalId = setInterval(scroll, 40); 

    return () => clearInterval(intervalId);
  }, []);


  return (
    <div>
      <p className='text-center mt-5'>Zapier is trusted by over 2.2 million companies worldwide</p>
      <div className="scroller-wrapper" ref={scrollerRef}>
      <div className="scroller">
        {images.concat(images).map((image, index) => (
          <img src={image} alt={`scroller-img-${index}`} key={index} />
        ))}
      </div>
    </div>
    </div>
  )
}

export default ScrollRight
