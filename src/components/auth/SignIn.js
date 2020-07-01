import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
  }
  render() {
    const { authError, auth } = this.props
    if (auth.uid) return <Redirect to='/' />
    return (
      <div className="container">
        <form className="secondcard" onSubmit={this.handleSubmit}>
          <h5 className="text-darken-3 title">Logowanie</h5>
          <div className="input-field">
            <label htmlFor="email"></label>
            <input type="email" id='email'  placeholder="Email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password"></label>
            <input type="password" id='password' placeholder="Hasło" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn red-darken-5 z-depth-0">Login</button>
          <div className="red-text center"> 
          { authError ? <p>{authError}</p> : null }
          </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
