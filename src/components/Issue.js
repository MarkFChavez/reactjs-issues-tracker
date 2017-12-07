import React from 'react'
import * as helpers from '../helpers'

const Issue = props => {
  const {html_url, number, title, user, labels} = props

  return (
    <div className='card'>
      <strong>
        <span className='card--badge'>#{number}</span>{' '}
        <a href={html_url} className='card--title' style={{marginLeft: 5}}>
          {title}
        </a>
      </strong>

      <div>
        <span className='card--openedBy'>
          opened by{' '}
          <img src={user.avatar_url} width={32} height={32} />{' '}
          <a href={user.html_url}>{user.login}</a>
        </span>
      </div>

      <div>
        {labels.map(label =>
          <span className='card--label' key={`label-${label.id}`} style={{backgroundColor: `#${label.color}`, color: helpers.getContrastYIQ(label.color)}}> {label.name} </span>
        )}
      </div>
    </div>
  )
}

export default Issue