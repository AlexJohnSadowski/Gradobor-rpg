import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
  render() {
  
    const { projects, auth, notifications } = this.props

    

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
          
        </div>
        <p className="subtitle text-gray">Copyright 2020 © Alex Sadowski</p>
      </div>
      
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}



export default compose(
   connect(mapStateToProps),
   firestoreConnect([
    { collection: 'projects', limit:2, orderBy: ['createdAt', 'desc']},
    { collection: 'notifications', limit:5, orderBy: ['time', 'desc']}
   ])
   )(Dashboard)
