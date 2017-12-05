import React from 'react'
import Issue from './Issue'

const IssueList = props => (
  <div className='issue-list'>
    {props.issues.map(issue =>
      <Issue {...issue} />
    )}
  </div>
)

export default IssueList