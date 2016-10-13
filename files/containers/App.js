import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    loadingStatus: state.loadingStatus
  }
}

export default connect(mapStateToProps)(App)