import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero';
import HeroImg from '../assets/night.jpg';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';


const About = () => {
  return (
    <div>
      <Navbar/>
      <Hero cName="hero-mid"
        heroimage={HeroImg}
        title="About"
        btnClass="hide" />
        <AboutUs/>
        <Footer/>
    </div>
  )
}

export default About