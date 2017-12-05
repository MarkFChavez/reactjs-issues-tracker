import React from 'react'

const Issue = props => {
  const {html_url, number, title, user} = props

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
    </div>
  )
}

export default Issue