import React from 'react'
import "./component.css"
import { useTitleCreateColor } from '../hoock/useTitleColor'

const Contato = () => {
   const{color} = useTitleCreateColor()
    
    return (<>
    <div className='information' >
       <p>information about my how contact my!!!</p>
       <small>hi is testing old tag!!</small>
       <h1 style={{color:color}} >Change color now, how is state !!</h1>
    </div>
    </>)
}

export default Contato