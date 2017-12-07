import React from 'react'
import IssueList from './IssueList'

const IssueListView = ({loading, issues}) => (
  <div style={{marginTop: 10, marginLeft: 10}}>
    {
      loading
        ? <span className='loading'> Looking for some issues you can work on </span>
        : <IssueList issues={issues} />
    }
  </div>
)

export default IssueListView