import { useContext } from "react"
import { CounterContext } from "../contexts/CounterContext"


export function SingleCounter() {

    const {counter, increaseCounter} = useContext(CounterContext);

    return (
        <div>
            <h2>Counter {counter}</h2>
            <button type="button" onClick={increaseCounter}>Add</button>
        </div>
    )
}