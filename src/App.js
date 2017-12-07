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
    loading: false
  }

  getIssues ({owner, repo}) {
    const issuesUrl = `https://api.github.com/repos/${owner}/${repo}/issues?state=open`
    const isPullRequest = issue => issue.pull_request === undefined

    this.setState({loading: true})

    fetch(issuesUrl)
      .then(response => response.json())
      .then(issues => {
        this.setState({issues: issues.filter(isPullRequest), loading: false})
      })
      .catch(e => e)
  }

  onLoad (source) {
    this.getIssues(source)
  }

  render() {
    const {title, loading, issues, owner, repo} = this.state

    return (
      <Router>
        <div>
          <Header title={'JS Issues'} />


          {/* ROOT */}
          <Route exact path='/' render={props =>
            <IssueListView
              onLoad={this.onLoad.bind(this)}
              loading={loading}
              issues={issues}
              source={REPOS['reactjs']}
              {...props} />
          }/>

          {/* REDUX */}
          <Route exact path='/redux' render={props =>
            <IssueListView
              onLoad={this.onLoad.bind(this)}
              loading={loading}
              issues={issues}
              source={REPOS['redux']}
              {...props} />
          }/>

          {/* WEBPACK */}
          <Route exact path='/webpack' render={props =>
            <IssueListView
              onLoad={this.onLoad.bind(this)}
              loading={loading}
              issues={issues}
              source={REPOS['webpack']}
              {...props} />
          }/>

          <Route path='/issues/:number' render={props => <IssueDetailView owner={owner} repo={repo} {...props} />} />
        </div>
      </Router>
    )
  }
}

export default App
