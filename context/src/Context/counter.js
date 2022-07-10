import { createContext, useState } from "react";

//theoretical i have create context of another way!!
export const CounterCountext = createContext();

export const CounterManageProvider = ({children}) => {
    const [counter, setCounter] = useState(12)
    console.log('test counter', counter)
    const [phase,setPhase] = useState("adding new value about state!!")
    return (  
      <CounterCountext.Provider value={{counter,phase, setCounter, setPhase}} >
       {children}
      </CounterCountext.Provider>
    )
}
