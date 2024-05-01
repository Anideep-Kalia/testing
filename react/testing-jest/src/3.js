import { useState } from 'react';
import './App.css';

function App() {
    const [data,setData]=useState("");
    const [btndata,setBtndata]=useState("");
  return (
    <>

    <h1>snapshot testing is done to check what amnmre the changes made after the test has been run</h1>
    <input type="text" placeholder='this is trial' id="skills1" defaultValue={"decided"} />
    <input type="text" placeholder='this' defaultValue={"to be decided"} />

    {/* get all by role testing */}
    <button onClick={()=>{setBtndata("button clicked")}}>this is it</button>
    <button onClick={()=>{setBtndata("button clicked")}}>this is it</button>
    <button onClick={()=>{setBtndata("button clicked")}}>this is it</button>
    <button onClick={()=>{setBtndata("button clicked")}}>this is it</button>
    {btndata}

    <label htmlFor="skills">kills</label>
    <input type="checkbox" id="skills" checked />
    </>
  );
}

export default App;
