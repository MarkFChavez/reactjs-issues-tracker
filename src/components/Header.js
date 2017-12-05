import React from 'react'

const Header = props => (
  <header className='header--container'>
    <span className='header--title'>
      {props.title} Issues
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