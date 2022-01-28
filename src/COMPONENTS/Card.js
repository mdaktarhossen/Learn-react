import React from 'react';

export default function Card(props) {
 const {title, des}=props
  return <div>
    <div className='cards'>
      <h1>{title}</h1>
      <p>{des}</p>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  </div>;
}
