import React, { Component } from 'react'
import IssueDetail from './IssueDetail'

class IssueDetailView extends Component {

  state = { detail: null }

  componentDidMount () {
    const number = this.props.match.params.number
    this.getIssueDetail(number)
  }

  getIssueDetail (number) {
    const issuesUrl = `https://api.github.com/repos/${this.props.owner}/${this.props.repo}/issues/${number}`

    fetch(issuesUrl)
      .then(response => response.json())
      .then(detail => this.setState({detail}))
      .catch(e => e)
  }

  render () {
    return (
      this.state.detail
        ? <IssueDetail issue={this.state.detail} />
        : (
          <div style={{marginTop: 10, marginLeft: 10}}>
            <div className='loading'>Loading issue detail</div>
          </div>
        )
    )
  }

}

export default IssueDetailView