import React, { Component } from 'react'
import Container from './components/Container'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <Container>
        <Header
          title='Contribute to React.js'
          subtitle='Help the community make better and maintainable software!' />
      </Container>
    )
  }
}

export default App
