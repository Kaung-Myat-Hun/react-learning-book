import React, { Component } from 'react'
import ComponentB from './ComponentB'

class ComponentA extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      show: false
    }
  }
  showHandler = () =>{
    this.setState({
      show: !this.state.show
    })
  }
  render() {
    return (
      <>
        {this.state.show && <ComponentB />}
        <button onClick={this.showHandler}>Show</button>
      </>
    )
  }
}

export default ComponentA