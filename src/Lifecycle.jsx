import React, { Component } from "react";

class Lifecycle extends Component {
  constructor(props) {
    super(props)
    console.log("contructor start")
    this.state = {
      count: 0,
      data : []
    }
  }
  getData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
    const res = await data.json()
    console.log(res)
    this.setState({
      data: res
    })
  }
  componentDidMount() {
    console.log("component life cycle start");
  }
  componentDidUpdate(prevProps , prevState){
    if(prevState.count !== this.state.count){
      this.getData();
    }
    console.log("component state is update")
  }
  increaseHandler = () => {
    this.setState({
      count: this.state.count +1
    })
  }
  render() {
    console.log("render start")
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.increaseHandler}>Increase</button>
        {this.state.data.map((item,index) =>(
          <p key={index}>{item.name}</p>
        ))}
      </>
    );
  }
}

export default Lifecycle;


