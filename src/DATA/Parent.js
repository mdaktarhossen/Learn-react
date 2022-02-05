import React from 'react';
import Child from './Child';

export default function Parent() {

  const getChildData=(data)=>{
    console.log(data)
  }
  return <div>
    <Child title=" I am From Parent" onData={getChildData}/>
  </div>;
}
