import { useState } from "react";

function Counter(){
  //state
  const [count, setCount ] = useState(0); //[ state (variable to hold), function to modify state]

  //functions to modify the state
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = (value) => {
    setCount(value);
  };

  return (
    <div className = "text-center p-5 border">
      <h1 className = "text-4xl">Count :{count}</h1>
      <button className = "px-4 py-2 bg-green-400" onClick={increment}>+</button>
      <button className = "px-4 py-2 bg-red-400" onClick={decrement}>-</button>
      <button className = "px-4 py-2 bg-blue-400" onClick={()=>reset(0)}>reset</button>
    </div>
  )
}
export default Counter;