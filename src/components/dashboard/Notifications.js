import React from 'react'
import moment from 'moment'
import pl from 'moment/locale/pl'

const Notifications = (props) => {
  console.log(props)
  const { notifications } = props;
  return (
    <div className="section">
      <div className="secondcard z-depth-0">
        <div className="card-content">
          <span className="card-title">
            Wieści</span>
          <ul className="notifications">
            { notifications && notifications.map(item => {
              return (
                <li key={item.id}>
                  <span className="footer__letter--notification">{item.user}
                  {item.content}</span>
                  <div className="note-date">
                    {moment(item.time.toDate()).locale('pl', pl).fromNow()}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notifications
