import React, { useState } from 'react';

export default function Usestate() {
  const [count, setCount]=useState(0)
  const handle=()=>{
    setCount(count+1)
  }
  return <div>
    <h1>This is use state</h1>
    <h1>Count: {count}</h1>
    <button onClick={handle}>Change value</button>
  </div>;
}
