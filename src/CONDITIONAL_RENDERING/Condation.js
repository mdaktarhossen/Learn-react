import React, { Component } from 'react';
import Home from './Home';
import Login from './Login';

export default class Condation extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isTrue:false
    }
  }
  
  render() {
      <h1>This is condation</h1>
      if (this.state.isTrue) {
        return <Home/>
      }
      else{
        return <Login/>
      }
      
  }
}
