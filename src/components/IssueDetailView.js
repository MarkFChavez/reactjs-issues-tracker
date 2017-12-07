import React, { Component } from 'react'
import IssueDetail from './IssueDetail'
import Loading from './Loading'
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
        : <Loading text='Loading issue detail' />
    )
  }

}

export default IssueDetailView