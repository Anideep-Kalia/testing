import React, { memo, useCallback, useState } from "react";

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count+1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  const restart = () => {
    setCount(0);
  };
  const switchSigns = () => {
    setCount((prev) => prev * -1);
  };

  const inputFunc=useCallback(()=>{
    console.log("thi s")
  },[count])

  return (
    <div>
      <h1>
        Count: <h3 data-testid="count">{count}</h3>
      </h1>
      <Buttoncompo inputFunc={inputFunc}/>
      <div>
        <button onClick={increment}> Increment</button>
        <button onClick={decrement}> Decrement</button>
        <button onClick={restart}> Restart</button>
        <button onClick={switchSigns}> Switch Signs</button>
      </div>
    </div>
  );
}

const Buttoncompo=memo(({inputFunc})=>{
  console.log("chilled")
  return(
  <div>
    <button> button clicked</button>
  </div>)
})

export default Counter;
