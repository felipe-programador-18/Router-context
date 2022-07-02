import React from 'react'
import {  NavLink } from 'react-router-dom'
import './component.css'

const Nav = () => {
 
    return (<>
    <div className='information'>
      <nav>
       <NavLink to='/' >Home</NavLink>
       <NavLink to='/sobre' >Sobre</NavLink>
       <NavLink to='/contato' >Contato</NavLink>   
      </nav>
    </div>
    </>)
}

export default Nav