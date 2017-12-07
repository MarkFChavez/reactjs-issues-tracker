import React, { Component } from 'react'
import Header from './components/Header'
import IssueListView from './components/IssueListView'
import IssueDetailView from './components/IssueDetailView'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

const REPOS = {
  reactjs: {owner: 'facebook', repo: 'react'},
  redux: {owner: 'reactjs', repo: 'redux'},
  webpack: {owner: 'webpack', repo: 'webpack'}
}

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
    const {title, loading, issues, owner, repo} = this.state

    return (
      <Router>
        <div>
          <Header title={title} />

          {/* ROOT */}
          <Route exact path='/' render={props =>
            <IssueListView loading={loading} issues={issues} {...props} />
          }/>

          {/* REDUX */}
          <Route exact path='/redux' render={props =>
            <IssueListView loading={loading} issues={issues} {...props} />
          }/>

          {/* WEBPACK */}
          <Route exact path='/webpack' render={props =>
            <IssueListView loading={loading} issues={issues} {...props} />
          }/>

          <Route path='/issues/:number' render={props => <IssueDetailView owner={owner} repo={repo} {...props} />} />
        </div>
      </Router>
    )
  }
}

export default App
