import React from 'react'
import image1 from './Images/tagImage1.png'
import image2 from './Images/tagImage2.png'
import image3 from './Images/tagImage3.png'
import image4 from './Images/tagImage4.png'

const BuilderBlock = () => {
  return (
    <div className='backgroundColor'>
      <div className='builderDiv'>
        <h1 className='text-center'>
         Zapier is the automation platform of choice for 87% of Forbes Cloud 100 companies in 2023
        </h1>
        <div className='tagImageDiv'>
         <img src={image1} alt="Fixed"/>
         <img src={image2} alt="Fixed"/>
         <img src={image3} alt="Fixed"/>
         <img src={image4} alt="Fixed"/>
        </div>
        <div className='customerDiv'>
          <div>
            <h1>93%</h1>
            <p>Customers who say using Zapier has made them better at their job</p>
          </div>
          <div>
            <h1>25M</h1>
            <p>Customers have created over 25 million Zaps on the platform</p>
          </div>
          <div>
            <h1>6 mins</h1>
            <p>The average user takes less than 6 minutes to set up a Zap</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuilderBlock
