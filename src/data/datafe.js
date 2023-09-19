import {Products} from "./productos"
  
export const traerDatos =()=>{
  return new Promise( resolve => {
      setTimeout(() => {
          resolve(Products)}
          , 300)
      })

}
