import React, { useState } from 'react'

const App = () => {
    const[data, setData] =useState("null");
    const[data1, setData1] =useState("null");

  return (
    <div>
      <h1>{data}</h1>
      <h1>{data1}</h1>
      <button onClick={()=>{setData("hello")}}>Click me</button>
      <input type="text" onChange={(e)=>{setData1(e.target.value)}} />
    </div>
  )
}

export default App
 