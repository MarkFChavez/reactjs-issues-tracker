import React from 'react'

const Issue = props => {
  const {number, title, user} = props

  return (
    <div className='card'>
      <strong className='card--title'>
        <span className='card--badge'>#{number}</span>{' '}
        {title}
      </strong>

      <div>
        <span className='card--openedBy'>
          opened by{' '}
          <img src={user.avatar_url} width={32} height={32} />{' '}
          <a href={user.html_url} target='_blank'>{user.login}</a>
        </span>
      </div>
    </div>
  )
}

export default Issue