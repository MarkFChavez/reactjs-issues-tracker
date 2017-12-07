import React from 'react'
import * as helpers from '../helpers'

const LabelList = ({labels}) => (
  <div className='card-label--container'>
    {labels.map(label =>
      <span className='card--label' key={`label-${label.id}`} style={{backgroundColor: `#${label.color}`, color: helpers.getContrastYIQ(label.color)}}>
        <a href='#' className='label-link' style={{color: 'inherit'}}>{label.name}</a>
      </span>
    )}
  </div>
)

export default LabelList