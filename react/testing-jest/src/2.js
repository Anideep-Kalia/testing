import { useState } from 'react';
import './App.css';

function App() {
    const [data,setData]=useState("");
    const [btndata,setBtndata]=useState("");
  return (
    <>
    <input type="text" placeholder='this is trial' onChange={(e)=>{setData(e.target.value)}} />
    <button onClick={()=>{setBtndata("button clicked")}}>this is it</button>
    {btndata}
    </>
  );
}

export default App;
