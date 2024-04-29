import { useState } from 'react';
import './App.css';

function App() {
    const [data,setData]=useState("");
    const [btndata,setBtndata]=useState("");
    const [btndata1,setBtndata1]=useState("");
  return (
    <>
    <input type="text" placeholder='this is trial' onChange={(e)=>{setData(e.target.value)}} />
    <button onClick={()=>{setBtndata("button clicked")}}>this is it</button>
    <button data-testid="btn2" onClick={()=>{setBtndata1("button2 clicked")}}>this is it 2</button>
    <div role='divinerole'>
        try new punch
    </div>

    {btndata}
    {btndata1}
    </>
  );
}

export default App;
