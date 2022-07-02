import {useContext } from "react";
import { TitleChangeColor } from "../Context/TitleColor";

//create new hoock personalites!!
export const useTitleCreateColor = () => {
 
  const Context = useContext(TitleChangeColor)

  if(!Context){
    console.log('nothing found here!!')
  }

   return Context
}