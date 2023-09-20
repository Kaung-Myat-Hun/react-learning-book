import React, { Component } from 'react'

class ComponentB extends Component {
  resizeHandler=() => {
    console.log("resizing")
  }
  componentDidMount() {
    window.addEventListener("resize" , this.resizeHandler )
  }
  componentWillUnmount(){
    window.removeEventListener("resize", this.resizeHandler)
  }
  render() {
    return (
      <div>ComponentB</div>
    )
  }
}

export default ComponentB

