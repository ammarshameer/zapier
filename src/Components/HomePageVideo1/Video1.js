import React from 'react'
import Video from "../Images/homepage_Hero1.mp4"
import { FaCheck } from "react-icons/fa6";
const Video1 = () => {
  return (
    <div className='text-center mt-5'>
      <div className='d-flex justify-content-center '>
        <p className='me-3'><FaCheck  className='me-1'/><strong>Free forever</strong>for core features</p>
        <p><FaCheck className='me-1'/><strong>More apps</strong>than any other platform</p>
      </div>
      <video width="1100" autoPlay loop muted>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Video1
