import React from 'react'
import "./HeroStyle.css"

const Hero = (props) => {
  return (
    <>
    <div className={props.cName}>
      <img src={props.heroimage}/>
      <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href="" className={props.btnClass}>{props.buttonText}</a>
      </div>
    </div>
    </>

  )
}

export default Hero