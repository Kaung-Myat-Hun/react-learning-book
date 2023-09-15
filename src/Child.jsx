
// function Child({name}) {
//   return (
//     <h1>{name}</h1>
//   )
// }



import {Component} from 'react'
class Child extends Component {
constructor(props) {
super(props)
this.state= {
  count : 0
}
this.clickHandler = this.clickHandler.bind(this)
}
clickHandler () {
  this.setState({
    count : this.state.count + 1
  })
}
addFiveHandler = () =>{
  for(let i =0; i<5; i++){
    console.log("adding" , i)
    this.setState((prev) => {
      return {
        count: prev.count + 1 
      }
    })
  }
}
render(){
  return(
    <>
      <h1>{this.state.count}</h1>
      <button onClick={this.clickHandler}>Add One</button>
      <button onClick={this.addFiveHandler}>Add five</button>
    </>
    )
  }
}
export default Child


// import React, { Component } from 'react'

// class Child extends Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <div>Child</div>
//     )
//   }
// }

// export default Child