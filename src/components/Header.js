import React from 'react'

const Header = props => (
  <header style={{textAlign: 'center'}}>
    <span className='header-title'>
      {props.title}
    </span>

    <div>
      <span className='header-subtitle'> {props.subtitle} </span>
    </div>
  </header>
)

export default Header