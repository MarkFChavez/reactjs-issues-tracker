import React, { Component } from 'react'
import Container from './components/Container'
import Header from './components/Header'
import IssueList from './components/IssueList'
import Issue from './components/Issue'

const TITLE='React.js'
const OWNER = 'facebook'
const REPO = 'react'
const ISSUES_URL = `https://api.github.com/repos/${OWNER}/${REPO}/issues`

class App extends Component {
  state = { issues: [] }

  componentDidMount () {
    fetch(ISSUES_URL)
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
      <Container>

        <Header title={TITLE} />

        <div style={{marginTop: 10}}>
          <IssueList issues={this.state.issues} />
        </div>

      </Container>
    )
  }
}

export default App
