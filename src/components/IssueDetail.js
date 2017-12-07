import React from 'react'
import ReactMarkdown from 'react-markdown'
import LabelList from './LabelList'
import OpenedBy from './OpenedBy'

const IssueDetail = ({issue}) => (
  <div className='container-fluid issue-detail'>
    <div className='row'>
      <div className='col-md-12'>
        <div style={{marginTop: 10}}>
          <span className='issue-title'>
            <span className='card--badge'>#{issue.number}</span> {issue.title}
          </span>

          <OpenedBy user={issue.user} />
          <LabelList labels={issue.labels} />
        </div>
      </div>
    </div>

    <div className='row' style={{marginTop: 10}}>
      <div className='col-md-12'>
        <div className='issue-detail--container'>
          <ReactMarkdown source={issue.body} />
        </div>
      </div>
    </div>

    <footer style={{marginTop: 20, textAlign: 'center'}}>
      <a href={issue.html_url} className='join-conversation--link'> Join the conversation </a>
    </footer>
  </div>
)

export default IssueDetail