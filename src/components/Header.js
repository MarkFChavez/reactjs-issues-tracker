import React from 'react'

const Header = props => (
  <header className='header--container'>
    <span className='header--title'>
      {props.title} Issues
    </span>

    {/* <div>
      <small className='header--subtitle'>
        Make <a href='#' className='header--self'>#javascript</a> better!
        Check out issues on <a href='#' className='header--self'>#redux</a> and <a href='#' className='header--self'>#webpack</a>.
      </small>
    </div> */}

    <div>
      <small className='header--subtitle'>
        Follow me on <a href='#' className='header--self--underlined'>twitter</a> &amp; {' '}
        <a href='#' className='header--self--underlined'>github</a>. If you want to contribute, submit a pull request {' '}
        <a href='#' className='header--self--underlined'>here</a>.
      </small>
    </div>
  </header>
)

export default Header