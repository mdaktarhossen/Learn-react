import React, { Component } from 'react';

export default class Onchange extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       changeValue:""
    }
  }

  handleOnchange=(x)=>{
    this.setState({
      changeValue:x.target.value
    })
  }
  

  render() {
    return <div>
      <h1>This is Onchange page</h1>
      <input style={{margin:"20px"}} type="text" onChange={this.handleOnchange}/>

      <h1>value:{this.state.changeValue} </h1>
    </div>;
  }
}
