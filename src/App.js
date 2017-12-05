import React, { Component } from 'react'
import Container from './components/Container'
import Header from './components/Header'
import IssueList from './components/IssueList'

const OWNER = 'facebook'
const REPO = 'react'
const ISSUES_URL = `https://api.github.com/repos/${OWNER}/${REPO}/issues`

class App extends Component {
  state = { issues: [] }

  componentDidMount () {
    fetch(ISSUES_URL)
      .then(response => response.json())
      .then(issues => this.setState({issues}))
      .catch(e => e)
  }

  render() {
    return (
      <Container>

        <Header
          title='<Contribute /> to React.js'
          subtitle='Help the community make better and maintainable software!' />

        <IssueList issues={this.state.issues} />

      </Container>
    )
  }
}

export default App
