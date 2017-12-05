import React from 'react'

const Header = props => (
  <header className='header--container'>
    <span className='header--title'>
      &gt; {props.title} Issues
    </span>
  </header>
)

export default Header