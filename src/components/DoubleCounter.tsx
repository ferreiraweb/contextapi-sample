import { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";

export function DoubleCounter() {
    
    const {doubleCounter} = useContext(CounterContext);

    return (
        <h2>Double Counter: {doubleCounter}</h2>
    )
}