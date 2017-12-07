import React, { Component } from 'react'
import IssueList from './IssueList'
import Loading from './Loading'
import { Link } from 'react-router-dom'

class IssueListView extends Component {

  componentDidMount () {
    this.props.onLoad(this.props.source)
  }

  render () {
    const {loading, issues} = this.props

    return (
      <div style={{marginTop: 10, marginLeft: 10, marginRight: 10}}>

        <div style={{marginBottom: 20}}>
          <span style={{fontSize: 36, fontWeight: 'bold'}}> Check other projects: </span>
          <Link to='/' className={this.props.source.repo === 'react' ? 'llink not-active-link' : 'llink active-link'}>react</Link>
          <Link to='/redux' className={this.props.source.repo === 'redux' ? 'llink not-active-link' : 'llink active-link'}>redux</Link>
          <Link to='/webpack' className={this.props.source.repo === 'webpack' ? 'llink not-active-link' : 'llink active-link'}>webpack</Link>
        </div>

        {
          loading
            ? <Loading text={`Looking for "${this.props.source.repo}" issues you can work on`} />
            : <IssueList issues={issues} source={this.props.source} />
        }
      </div>
    )
  }

}

export default IssueListView