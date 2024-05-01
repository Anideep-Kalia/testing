import React, { useState } from 'react'

const App = (props) => {
    const[data, setData] =useState("null");
    const[data1, setData1] =useState("null");

  return (
    <div>
      <h1>{data}</h1>
      <h1>{data1}</h1>
      <button onClick={()=>{setData("hello")}}>Click me</button>
      <button onClick={props.func}>Click</button>
      <input type="text" onChange={(e)=>{setData1(e.target.value)}} />
      {props.name}
    </div>
  )
}

export default App
 