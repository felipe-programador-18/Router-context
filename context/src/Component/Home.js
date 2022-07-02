import React, {useContext} from 'react'
import "./component.css"
import  {CounterCountext}  from '../Context/counter'
const Home = () => {
    const {counter,phase, setCounter} = useContext(CounterCountext)
    
    const IncreaseCounter = () => {
      setCounter(counter+1)  
    }
    
    const Decrement = () => {
        if(counter > 0){
            setCounter(counter-1)
        }
    }


    return (<>
    <h1 className='information' >Information about home and my products!!</h1>{counter}
     <button onClick={IncreaseCounter} >Increase</button>
     <button onClick={Decrement} >Decrement</button>
    
       <h2>  {phase} </h2>
    </>)
}

export default Home