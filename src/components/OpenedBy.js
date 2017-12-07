import React from 'react'

const OpenedBy = ({user}) => (
  <div className='card-openedBy--container'>
    <span className='card--openedBy'>
      opened by{' '}
      <img src={user.avatar_url} width={32} height={32} />{' '}
      <a href={user.html_url}>{user.login}</a>
    </span>
  </div>
)

export default OpenedBy