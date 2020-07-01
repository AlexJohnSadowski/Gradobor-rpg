import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import logo from '../images/logo.png'

const Navbar = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
  return (
    <header className="header">
    <Link className="brand-logo" to='/'><img src={logo}></img></Link>
    <div className="topnav linkz">
        {auth.isLoaded && 
        links
        }
    </div>
</header>
    
  )
}



const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)
