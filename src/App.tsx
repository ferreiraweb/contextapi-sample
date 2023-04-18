import { DoubleCounter } from "./components/DoubleCounter";
import { SingleCounter } from "./components/SingleCounter";
import { CounterContextProvider } from "./contexts/CounterContext";

function App() {

  return (
    <CounterContextProvider>
      <SingleCounter />
      <DoubleCounter />
    </CounterContextProvider>
  )
}

export default App
