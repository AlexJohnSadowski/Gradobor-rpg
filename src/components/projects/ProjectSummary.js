import React from 'react'
import moment from 'moment'
import pl from 'moment/locale/pl'

const ProjectSummary = ( {project}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p className="subtitle">Wieści rozniósł {project.authorFirstName } {project.authorLastName }</p>
        <p className="footer__letter">{moment(project.createdAt.toDate()).locale('pl', pl).startOf('day').fromNow() }</p>
      </div>
    </div>
  )
}

export default ProjectSummary
