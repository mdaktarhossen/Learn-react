import React from 'react';

export default function Form() {
  const handleName=(x)=>{
  console.log(x.target.value);
  }
  const handleEmail=(x)=>{
  console.log(x.target.value);
  }
  const handlePassword=(x)=>{
  console.log(x.target.value);
  }
  const handleSubmit=(x)=>{
  console.log("Form is submited");
  x.preventDefault()
  }

  return <div>
    <h1>This is a form</h1>
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h1>Registration form</h1>
        <h1>Name: <input type="text" onChange={handleName}/></h1>
        <h1>Email: <input type="Email" onChange={handleEmail}/></h1>
        <h1>Password: <input type="password" onChange={handlePassword}/></h1>
        <h1><button type='submit'>Registration</button></h1>
      </form>
    </div>
  </div>;
}
