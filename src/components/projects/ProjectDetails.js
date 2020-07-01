import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'
import pl from 'moment/locale/pl'
import { deleteProject } from '../../store/actions/projectActions'

const ProjectDetails = (props) => {
  
  
  const { project } = props;

  const handleDelete = e => {
    const { id } = props;
    e.preventDefault();
    props.deleteProject(id);
    props.history.push('/')
  }


  if (project) {
  
    return (
      <div className="container section project-details">
        <div className="secondcard z-depth-0">
          <div className="card-content">
            <span className="card-title">{ project.title }</span>
            <p className="subtitle">{project.content}</p>
          </div>
          <div className="subtitle">
            <div className="footer__letter">Wieści rozniósł {project.authorFirstName} {project.authorLastName}
              <div>{moment(project.createdAt.toDate()).locale('pl', pl).startOf('day').fromNow() }</div>
              
              <button className="btn red-darken-5 z-depth-0" onClick={handleDelete}>Delete</button> 
            </div>
          </div>
        </div>
      </div>
    )
  
  } else {
    return (
    <div className="container center">
      <p>Loading gossips...</p>
    </div>
    )
  }
  
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects
  const project = projects ? projects[id] : null
  return {
    project: project,
    id:id
  }
}

const mapDispatchToProps = dispatch => {
  return {
      deleteProject: (id) => dispatch(deleteProject(id))
  }
}

export default compose(
connect(mapStateToProps, mapDispatchToProps),
firestoreConnect([
  {collection: 'projects', limit:2, orderBy: ['createdAt', 'desc']}
])
)(ProjectDetails)
