import {createContext, useReducer,} from 'react'


export const TitleChangeColor = createContext()

export const titleColorReducer = (state, action) => {
// i can works and did with if and else, but this case i'm working with
//switch

   // return state
}

export const CreatContexProv = ({children}) =>{
   
    const [state, dispacth] = useReducer(titleColorReducer, {color:"red"})

    return(
     <TitleChangeColor.Provider value={{...state}} >
        {children}
    </TitleChangeColor.Provider>  )
}