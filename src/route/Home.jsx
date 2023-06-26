import React from 'react'
import Navbar from '../components/Navbar';
import Hero from "../components/Hero";
import Heroimg from '../assets/hero.jpg'
import Destination from '../components/Destination';
import Trip from '../components/Trip';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero cName='hero'
        heroimage={Heroimg}
        title='Your Journey Your Story'
        text='Choose Your Favourite Destination'
        buttonText='Travel Plan'
        url='/'
        btnClass='show' />
        <Destination/>
        <Trip/>
        <Footer/>
    </>
  )
}

export default Home