import React, { Component } from "react";

class Lifecycle extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      count: 0
    }
  }
  getData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
    const res = await data.json()
    console.log(res)
  }
  componentDidMount() {
    this.getData();
    console.log("component life cycle start");
  }
  componentDidUpdate(){
    console.log("component state is update")
  }
  increaseHandler = () => {
    this.setState({
      count: this.state.count +1
    })
  }
  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.increaseHandler}>Increase</button>
      </>
    );
  }
}

export default Lifecycle;
