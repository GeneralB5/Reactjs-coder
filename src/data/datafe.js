import {Products} from "./productos"
  
export const TraerDatos =()=>{
  return new Promise( resolve => {
      setTimeout(() => {
          resolve(Products)}
          , 300)
      })

}
