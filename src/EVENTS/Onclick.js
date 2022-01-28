import React, { Component } from 'react';

export default class Onclick extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }


  handle=()=>{
    this.setState({
      count:this.state.count + 1
    })
  }
  render() {
    return <div>
      <h1>This is events</h1>
      <h1>Count: {this.state.count}</h1>
      <button onClick={this.handle} disabled={this.state.count===5? true: false}>cleck here</button>
    </div>;
  }
}
