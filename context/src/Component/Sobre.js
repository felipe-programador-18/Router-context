//import React, {useContext} from 'react'
import './component.css'
//import { CounterCountext } from '../Context/counter'
import { useCounterHook } from '../hoock/useCounterCounter'
import { useTitleCreateColor } from '../hoock/useTitleColor'

const Sobre = () => {
  const {counter,phase, setCounter} = useCounterHook()
  
  // this i am destructing props create in another file!!
  const {color } = useTitleCreateColor()

  const IncreaseCounter = () => {
    setCounter(counter+1)  
  }
  
  const Decrement = () => {
      if(counter > 0){
          setCounter(counter-1)
      }
  }

    return (<div className='information'>
                 
         <h1 style={{color:color}} >Information about how create new code with more effectvily</h1>
         {color}
         <button onClick={IncreaseCounter} >+</button>
         <button onClick={Decrement} >-</button>
            {counter}
            <br/>
            {phase}
    </div>)
}

export default Sobre