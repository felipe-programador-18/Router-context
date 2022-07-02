import {useContext } from "react"
import { CounterCountext } from "../Context/counter"

// this turned hoock personalites to together work about contextapi!!

export const useCounterHook = () => {
  const context = useContext(CounterCountext)

  if(!context){
    console.log('context not found!!!')
  }   

  return context
}