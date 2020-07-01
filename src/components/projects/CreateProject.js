import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state)
    this.props.history.push('/')
  }


  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div className="container">
        <form className="secondcard" onSubmit={this.handleSubmit}>
          <div className="text-darken-3 title">Zasiej plotkę</div>
          <div className="input-field">
          <textarea id="title" className="materialize-textarea" placeholder="Tytuł" onChange={this.handleChange}></textarea>
            <label htmlFor="title"></label>
            
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" placeholder="Treść" onChange={this.handleChange}></textarea>
            <label htmlFor="content"></label>
          </div>
          <div className="input-field">
            <button className="btn red-darken-5">wyślij</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
