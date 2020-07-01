import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state)
  }
  render() {
    const { authError, auth } = this.props
    if (auth.uid) return <Redirect to='/' />

    return (
      <div className="container">
        <form className="secondcard" onSubmit={this.handleSubmit}>
          <h5 className="text-darken-3 title">Rejestracja</h5>
          <div className="input-field">
            <label htmlFor="email"></label>
            <input type="email" id='email' placeholder="Email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password"></label>
            <input type="password" id='password'  placeholder="Hasło (min. 8 znaków!)" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName"></label>
            <input type="text" id='firstName' placeholder="Imię postaci" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName"></label>
            <input type="text" id='lastName'  placeholder="Nazwisko postaci" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn red-darken-5 z-depth-0">Zarejestruj</button>
            <div className="red-text center">
              { authError ? <p>{ authError }</p> : null}
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
