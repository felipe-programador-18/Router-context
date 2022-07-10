import {useContext } from "react"
import { CounterCountext } from "../Context/counter"

// this turned hoock personalites to together work about contextapi!!

export const useCounterHook = () => {
  const context = useContext(CounterCountext)
  console.log('testetsetes', context)
  if(!context){
    console.log('context not found!!!')
  }   

  return context
}