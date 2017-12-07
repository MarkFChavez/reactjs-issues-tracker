import React, { Component } from 'react'
import Header from './components/Header'
import IssueList from './components/IssueList'
import Issue from './components/Issue'

class App extends Component {
  state = {
    title: '#reactjs',
    owner: 'facebook',
    repo: 'react',
    issues: [],
    loading: true
  }

  componentDidMount () {
    this.getIssues()
  }

  getIssues () {
    const {owner, repo} = this.state
    const issuesUrl = `https://api.github.com/repos/${owner}/${repo}/issues?state=open`
    const isPullRequest = issue => issue.pull_request === undefined

    fetch(issuesUrl)
      .then(response => response.json())
      .then(issues => {
        this.setState({issues: issues.filter(isPullRequest), loading: false})
      })
      .catch(e => e)
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <div style={{marginTop: 10, marginLeft: 10}}>
          {
            this.state.loading
              ? <span className='loading'> Looking for some issues you can work on </span>
              : <IssueList issues={this.state.issues} />
          }
        </div>
      </div>
    )
  }
}

export default App
