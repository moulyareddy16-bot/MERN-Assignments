import { createContext } from "react";
import { useState } from "react";

export const CounterContext = createContext();

function CounterStore({children}) {

    //state
    const [counter,setCounter] = useState(0);

    //function to increment counter
    const incrementCounter = ()=>{
        setCounter(counter+1)
    }

    //function to decrement counter
    const decrementCounter = ()=>{
        setCounter(counter-1)
    }

  return (
    <CounterContext.Provider value = {{counter,incrementCounter,decrementCounter}} >
        {children}
    </CounterContext.Provider>
  )
}

export default CounterStore