import React from 'react'
import './AboutUsStyle.css'
import AboutSectionData from './AboutSectionData'

const AboutUs = () => {
  return (
    <div className='about-container'>
      {
        AboutSectionData.map((val,ind)=>{
          return <div key={ind}>
           <h2>{val.heading}</h2>
          <p>{val.text}
          </p>
          </div>
        })
      }
    </div>
  )
}

export default AboutUs