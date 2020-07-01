import React, { Profiler } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
    <div className="wrap">
          <li><NavLink to='/create'>Plotki</NavLink></li>
          <li><NavLink to='/'>Przygody</NavLink></li>
          <li><NavLink to='/'>Tawerny</NavLink></li>
          <li><NavLink to='/'>Encyklopedia</NavLink></li>
          <li><NavLink to='/' >Postać</NavLink></li>
          <li><a onClick={props.signOut}>Wyloguj się</a></li>
    </div>
  )
}


const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
