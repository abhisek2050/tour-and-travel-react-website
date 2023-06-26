import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ServiceImage from '../assets/contact.jpg'
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Hero cName="hero-mid"
      title="Contact"
      heroimage={ServiceImage}/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contact