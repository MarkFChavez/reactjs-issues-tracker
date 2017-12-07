import React, { Component } from 'react'
import IssueList from './IssueList'
import Loading from './Loading'

class IssueListView extends Component {

  componentDidMount () {
    this.props.onLoad(this.props.source)
  }

  render () {
    const {loading, issues} = this.props

    return (
      <div style={{marginTop: 10, marginLeft: 10}}>
        {
          loading
            ? <Loading text='Looking for some issues you can work on' />
            : <IssueList issues={issues} source={this.props.source} />
        }
      </div>
    )
  }

}

export default IssueListView