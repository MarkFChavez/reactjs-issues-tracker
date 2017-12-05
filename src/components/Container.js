import React from 'react'

const Container = props => (
  <div className='container'>
    <div className='row'>
      <div className='col-xs-8 col-xs-offset-2'>
        {props.children}
      </div>
    </div>
  </div>
)

export default Container