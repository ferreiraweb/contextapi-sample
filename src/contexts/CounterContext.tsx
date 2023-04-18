
import { ReactNode, createContext, useEffect, useState } from "react";

export const CounterContext = createContext({} as any);

interface ICounterProps {
    children: ReactNode
}

export function CounterContextProvider({children}: ICounterProps) {
    
    const [counter, setCounter] = useState(0);
    const [doubleCounter, setDoubleCounter] = useState(0);

    function increaseCounter() {
        setCounter((state: any) => state + 1 )
    }

    useEffect(() => {
        setDoubleCounter(counter * 2)
    }, [counter])
    

    return (
        <CounterContext.Provider value={{counter, doubleCounter, setCounter, increaseCounter}}>
            {children}
        </CounterContext.Provider>
    )
}
