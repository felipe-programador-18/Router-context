import {createContext, useReducer,} from 'react'


export const TitleChangeColor = createContext()

export const titleColorReducer = (state, action) => {
// i can works and did with if and else, but this case i'm working with
//switch
   switch(action.type){
    case "RED": 
     return {...state, color:'red'}
    case "BLUE":
     return {...state, color:'blue'}
    case "GREEN":
     return {...state, color:'green'}
    default:
        return state
   }
}

export const CreatContexProv = ({children}) =>{
   
    const [state, dispatch] = useReducer(titleColorReducer, {color:"gray"})

    return(
     <TitleChangeColor.Provider value={{...state, dispatch}} >
        {children}
    </TitleChangeColor.Provider>  )
}