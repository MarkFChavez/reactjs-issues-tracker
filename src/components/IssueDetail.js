import React from 'react'
import ReactMarkdown from 'react-markdown'

const IssueDetail = ({issue}) => (
  <div className='container-fluid issue-detail'>
    <div className='row'>
      <div className='col-md-12'>
        <div style={{marginTop: 10}}>
          <span className='issue-title'> {issue.title} </span>
          <div>
            <span style={{fontSize: 24}}> reported by {issue.user.login} </span>
          </div>
          <hr />
        </div>
      </div>
    </div>

    <div className='row'>
      <div className='col-md-10'>
        <div className='issue-detail--container'>
          <ReactMarkdown source={issue.body} />
        </div>
      </div>

      <div className='col-md-2'>
        assignees
      </div>
    </div>
  </div>
)

export default IssueDetail