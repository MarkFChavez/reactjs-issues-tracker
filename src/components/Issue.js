import React from 'react'
import { Link } from 'react-router-dom'
import LabelList from './LabelList'
import OpenedBy from './OpenedBy'

const Issue = props => {
  const {number, title, user, labels} = props

  return (
    <div className='card'>
      <strong>
        <span className='card--badge'>#{number}</span>{' '}
        <Link className='card--title' style={{marginLeft: 5}} to={`/issues/${number}`}>
          {title}
        </Link>
      </strong>

      <OpenedBy user={user} />
      <LabelList labels={labels} />
    </div>
  )
}

export default Issue