import React, { Component } from 'react';

export default class Setstate extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }

  changed=(x)=>{
    this.setState({
      count: this.state.count + 1
    })
  }


  
  render() {
    return <div>
      <h1>Count: {this.state.count}</h1>
      <button onClick={this.changed}>Change</button>
    </div>;
  }
}
