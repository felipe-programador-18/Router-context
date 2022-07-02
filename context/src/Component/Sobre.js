import React, {useContext} from 'react'
import './component.css'
import { CounterCountext } from '../Context/counter'

const Sobre = () => {
  const {counter,phase, setCounter} = useContext(CounterCountext)

  const IncreaseCounter = () => {
    setCounter(counter+1)  
  }
  
  const Decrement = () => {
      if(counter > 0){
          setCounter(counter-1)
      }
  }

    return (<div className='information'>
                 
         <h1>Information about how create new code with more effectvily</h1>
         <button onClick={IncreaseCounter} >+</button>
         <button onClick={Decrement} >-</button>
            {counter}
            <br/>
            {phase}
    </div>)
}

export default Sobre