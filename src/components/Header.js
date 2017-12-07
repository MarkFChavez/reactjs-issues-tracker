import React from 'react'
import { Link } from 'react-router-dom'

const Header = props => (
  <header className='header--container'>
    <span className='header--title'>
      <Link to='/' className='header--self'>{props.title} Issues</Link>
    </span>

    <div>
      <small className='header--subtitle'>
        Follow me on <a href='https://twitter.com/markisundefined' className='header--self--underlined'>Twitter</a> &amp; {' '}
        <a href='https://github.com/mrkjlchvz' className='header--self--underlined'>GitHub</a>.
        <br />
        If you want to contribute, you are encouraged to do so! {' '}
        Start <a href='https://github.com/mrkjlchvz/reactjs-issues-tracker/pulls' className='header--self--underlined'>here</a>.
      </small>
    </div>
  </header>
)

export default Header