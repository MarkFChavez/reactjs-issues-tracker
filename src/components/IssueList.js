import React from 'react'
import Issue from './Issue'
import { Link } from 'react-router-dom'

const IssueList = props => (
  <div className='issue-list'>
    <div style={{marginTop: 10, marginBottom: 10}}>
      <span style={{fontSize: 24}}> Check other projects: </span>
      <Link to='/' className={props.source.repo === 'react' ? 'llink not-active-link' : 'llink active-link'}>react</Link>
      <Link to='/redux' className={props.source.repo === 'redux' ? 'llink not-active-link' : 'llink active-link'}>redux</Link>
      <Link to='/webpack' className={props.source.repo === 'webpack' ? 'llink not-active-link' : 'llink active-link'}>webpack</Link>
    </div>

    {props.issues.map(issue =>
      <Issue key={issue.id} {...issue} />
    )}
  </div>
)

export default IssueList