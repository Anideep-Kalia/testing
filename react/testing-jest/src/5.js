import React, { useState } from 'react'

const App = () => {
    const[data, setData] =useState("null");

  return (
    <div>
      <h1>{data}</h1>
      <button onClick={()=>{setData("hello")}}>Click me</button>
    </div>
  )
}

export default App
 