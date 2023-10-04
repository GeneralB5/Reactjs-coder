import { useEffect, useState } from "react"
import { TraerDatos } from "../../data/datafe"
import Itemlist from "./itemlist/itemlist"
import {GetCategoriaProducts} from "../../data/datacategoria"
import { useParams } from "react-router-dom"
function Itemlistconatainer2({greetings}){
const [productos, setProductos] = useState([])
const {categoriaid}=useParams()
useEffect(()=>{
    const Func = categoriaid ? GetCategoriaProducts : TraerDatos
    Func(categoriaid).then(data=>{
        console.log(data)
        setProductos(data)
    }).catch(err=>console.log(err))
},[categoriaid])
return(
    <>
        <h2>{greetings}</h2>
        <Itemlist Productos={productos} />
    </>
)
}
export default Itemlistconatainer2