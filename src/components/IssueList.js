import React from 'react'
import Issue from './Issue'

const IssueList = props => (
  <div className='issue-list'>
    {props.issues.map(issue =>
      <Issue key={issue.id} {...issue} />
    )}
  </div>
)

export default IssueList