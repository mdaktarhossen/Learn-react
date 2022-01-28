import React, { Component } from 'react';

export default class Class extends Component {
  render() {
    const {title, des}=this.props

    return <div>
      <div className='cards'>
      <h1>{title}</h1>
      <p>{des}</p>
      </div>
    </div>;
  }
}
