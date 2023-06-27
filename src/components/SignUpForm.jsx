import React from 'react'
import './SignUpFormStyle.css'
import { NavLink } from 'react-router-dom'

const SignUpForm = () => {
  return (
    <div className='SignUp'>
      <h1>Sign Up</h1>
      <div className="form-containers">
        <form action="">
          <input type="text" placeholder='User Name' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <a href=''>Sign Up</a>
        </form>
        <div className='goback'>
            <NavLink to="/">Go Back</NavLink>
        </div> 
      </div>
    </div>
  )
}

export default SignUpForm