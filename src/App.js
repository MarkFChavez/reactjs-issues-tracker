import React, { Component } from 'react'
import Header from './components/Header'
import IssueListView from './components/IssueListView'
import IssueDetailView from './components/IssueDetailView'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

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
      <Router>
        <div>
          <Header title={this.state.title} />

          {/* routes */}
          <Route exact path='/' render={() => <IssueListView {...this.state} />} />
          <Route path='/issues/:id' render={IssueDetailView} />
        </div>
      </Router>
    )
  }
}

export default App
