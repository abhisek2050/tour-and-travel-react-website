import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero';
import HeroService from '../assets/service.jpg'
import Trip from '../components/Trip'
import Footer from '../components/Footer'

const Service = () => {
  return (
    <div>
      <Navbar/>
      <Hero cName="hero-mid"
      title="Service"
      heroimage={HeroService}/>
      <Trip/>
      <Footer/>
    </div>
  )
}

export default Service