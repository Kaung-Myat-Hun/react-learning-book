import React, { Component } from 'react'

class ConditionalRendering extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      sayHello: false
    }
  }
  render() {
    return (
      <div>
        {this.state.sayHello ? <h1>Hello</h1>: <h1>HI</h1>}
      </div>
    )
  }
}

export default ConditionalRendering

