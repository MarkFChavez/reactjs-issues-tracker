import React, { Component } from 'react'
import Container from './components/Container'
import Header from './components/Header'
import IssueList from './components/IssueList'
import Issue from './components/Issue'

class App extends Component {
  state = {
    title: 'React.js',
    owner: 'facebook',
    repo: 'react',
    issues: []
  }

  componentDidMount () {
    const {owner, repo} = this.state
    const issuesUrl = `https://api.github.com/repos/${owner}/${repo}/issues`

    fetch(issuesUrl)
      .then(response => response.json())
      .then(issues => {
        function isPullRequest (issue) {
          return issue.pull_request === undefined
        }
        this.setState({issues: issues.filter(isPullRequest)})
      })
      .catch(e => e)
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} />

        <div style={{marginTop: 100}}>
          <Container>
            <div style={{marginTop: 10}}>
              <IssueList issues={this.state.issues} />
            </div>
          </Container>
        </div>
      </div>
    )
  }
}

export default App
