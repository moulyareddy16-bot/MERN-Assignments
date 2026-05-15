import { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";

function CounterA() {

    const {counter,incrementCounter,decrementCounter} = useContext(CounterContext);

  return (
    <div>
        <h1 className="text-4xl text-center mb-2">Counter A</h1>
        <div className="bg-orange-400 mx-10 p-12 text-center">
            <h1 className="text-3xl mb-3">{counter}</h1>
            <button onClick={incrementCounter} className="bg-green-500 border border-green-700 text-3xl w-12 h-12 m-6">+</button>
            <button onClick={decrementCounter} className="bg-red-500 border border-red-700 text-3xl w-12 h-12 m-6">-</button>
        </div>
    </div>
  )
}

export default CounterA