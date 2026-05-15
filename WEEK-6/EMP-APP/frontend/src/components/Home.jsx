import {useContext} from 'react';
import { counterContextObj } from '../contexts/ContextProvider';
import Test from './Test';
import { useCounterStore } from '../store/CounterStore';

function Home() {


  let newCounter = useCounterStore((state)=>state.newCounter)
  let incrementCounter = useCounterStore((state)=>state.incrementCounter)
  let decrementCounter = useCounterStore((state)=>state.decrementCounter)

  let {counter,changeCounter} = useContext(counterContextObj)
  
  console.log("Home")
  return (
    <div>
      <h1 className='text-4xl text-center mb-0.5 p-3'>Counter: {counter}</h1>
      <button onClick={changeCounter} className='bg-gray-400 border border-gray-900 block mx-auto text-3xl mb-3'>+1</button>

       <h1 className='text-4xl text-center mb-0.5 p-3'>NewCounter: {newCounter}</h1>
      <button onClick={incrementCounter} className='bg-gray-400 border border-gray-900 block mx-auto text-3xl mb-3'>+1</button>

      <button onClick={decrementCounter} className='bg-gray-400 border border-gray-900 block mx-auto text-3xl mb-3'>-1</button>

      <Test />
    </div>
  )
}

export default Home