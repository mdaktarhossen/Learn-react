import React, { useState } from 'react';

export default function Form() {
  const [name, setName]=useState("")
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")

  const handleName=(x)=>{
    setName(x.target.value)
  }
  const handleEmail=(x)=>{
    setEmail(x.target.value)
  }
  const handlePassword=(x)=>{
    setPassword(x.target.value)
  }
  const handleSubmit=(x)=>{
  console.log("Form is submited");
  console.log([`name is: ${name}, password is: ${password}, Email is: ${email}`])
  x.preventDefault()
  }

  return <div>
    <h1>This is a form</h1>
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h1>Registration form</h1>
        <h1>Name: <input type="text" value={name} onChange={handleName}/></h1>
        <h1>Email: <input type="Email" value={email} onChange={handleEmail}/></h1>
        <h1>Password: <input type="password" value={password} onChange={handlePassword}/></h1>
        <h1><button type='submit'>Registration</button></h1>
      </form>
    </div>
  </div>;
}
