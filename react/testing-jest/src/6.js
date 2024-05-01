import React, { useEffect, useState } from 'react'

const App = () => {
    const [data,setData]=useState([]);

    useEffect(()=>{
        getData();
    },[])

    const getData=async()=>{
        let result=await fetch("https://jsonplaceholder.typicode.com/users");
        setData(result);
    }
  return (
    <div>
      <h1>hi this is for testing API's</h1>
    </div>
  )
}

export default App
