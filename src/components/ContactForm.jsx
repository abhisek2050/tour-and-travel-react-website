import './ContactFormStyle.css'
import React from 'react'

const ContactForm = () => {
  return (
    <div className='form-container'>
        <h1>Send a Message for us !</h1>
        <form action="">
            <input type="text" placeholder='Name'/>
            <input type="email" placeholder='Email'/>
            <input type="text" placeholder='Subject'/>
            <textarea placeholder='Message' name="" id="" cols="30" rows="10"></textarea>
            <button>Send Message</button>
        </form>
    </div>
  )
}

export default ContactForm