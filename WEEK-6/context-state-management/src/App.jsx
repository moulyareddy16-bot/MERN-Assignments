import CounterA from "./components/CounterA";
import CounterB from "./components/CounterB";
import CounterC from "./components/CounterC";
import CounterD from "./components/CounterD";

function App() {

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-15 p-5 bg-amber-100 min-h-screen">
      <CounterA />
      <CounterB />
      <CounterC />
      <CounterD />
    </div>
  )

}

export default App
