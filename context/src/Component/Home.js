//import React,{useContext} from 'react'
import "./component.css"
//import  {CounterCountext}  from '../Context/counter'
import { useCounterHook } from '../hoock/useCounterCounter'
import { useTitleCreateColor } from "../hoock/useTitleColor"

const Home = () => {
    //const {counter,phase, setCounter} = useContext(CounterCountext)
   
    //adding value about context more hard!!
    //works inside about titlechangecolor
   const {color} = useTitleCreateColor()
   console.log(color)


    const {counter, phase, setCounter} = useCounterHook()

    const IncreaseCounter = () => {
      setCounter(counter+1)  
    }
    
    const Decrement = () => {
        if(counter > 0){
            setCounter(counter-1)
        }
    }


    return (<>
    <h1 className='information' style={{color: color}} >Information about home and my products!!</h1>{counter}
     <button onClick={IncreaseCounter} >Increase</button>
     <button onClick={Decrement} >Decrement</button>
    
       <h2>  {phase} </h2>

        {color}
    </>)
}

export default Home