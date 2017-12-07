import React from 'react'
import { Link } from 'react-router-dom'
import * as helpers from '../helpers'

const Issue = props => {
  const {id, number, title, user, labels} = props

  return (
    <div className='card'>
      <strong>
        <span className='card--badge'>#{number}</span>{' '}
        <Link className='card--title' style={{marginLeft: 5}} to={`/issues/${id}`}>
          {title}
        </Link>
      </strong>

      <div className='card-openedBy--container'>
        <span className='card--openedBy'>
          opened by{' '}
          <img src={user.avatar_url} width={32} height={32} />{' '}
          <a href={user.html_url}>{user.login}</a>
        </span>
      </div>

      <div className='card-label--container'>
        {labels.map(label =>
          <span className='card--label' key={`label-${label.id}`} style={{backgroundColor: `#${label.color}`, color: helpers.getContrastYIQ(label.color)}}> {label.name} </span>
        )}
      </div>
    </div>
  )
}

export default Issue