import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div className="wrap">
        <li><NavLink to='/signup'>Rejestracja</NavLink></li>
        <li><NavLink to='/signin'>Login</NavLink></li>
      
    </div>
  )
}

export default SignedOutLinks