import React, { useState, useEffect } from "react";
import {traerDatos} from "../../data/datafe";
import Itemlist from "./itemlist/itemlist";
const Itemlistcontainer = ({greeting,clases})=>{
    const [productos, setProductos] = useState([])
    useEffect(() => {
        traerDatos().then(data=>{
          setProductos(data)
        })
        .catch(err=>{
            console.log(err)
        })
        },[])
   console.log(productos)
    return(
        <div>
            <h2 className = {clases} >{greeting}</h2>
            <Itemlist productos={productos} />
        </div>
    )
}
export default Itemlistcontainer