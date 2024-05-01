import React, { useEffect, useState } from 'react'

const App = () => {
    let login = true
    const [data, setData] = useState(null);
    const [data1, setData1] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            setData("anideep")
        }, 500);
        setTimeout(() => {
            setData1("Kalia")
        }, 2000);
    }, [])
    return (
        <div id='id'>
            <h1>QueryBy and QuerAllbt</h1>
            {
                login == 1 ? <button>Login</button> : <button>Logout</button>
            }
            <div>Login</div>
            <div>{data}</div>
            <div>{data1}</div>
        </div>
    )
}

export default App
