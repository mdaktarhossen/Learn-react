import React, { useEffect, useState } from 'react';

export default function Useeffect() {
  const [count, setcount] = useState(0);
  // 
  useEffect(()=>{
    console.log("useeffect");
  },[]);

  return <div>
    <h1>I am useeffect</h1>
    <h1>Count: {count}</h1>
    <button onClick={()=>{
      setcount(count+1)
    }}>Click</button>
  </div>;
}
