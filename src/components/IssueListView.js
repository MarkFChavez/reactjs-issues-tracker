import React from 'react'
import IssueList from './IssueList'
import Loading from './Loading'

const IssueListView = ({loading, issues}) => (
  <div style={{marginTop: 10, marginLeft: 10}}>
    {
      loading
        ? <Loading text='Looking for some issues you can work on' />
        : <IssueList issues={issues} />
    }
  </div>
)

export default IssueListView