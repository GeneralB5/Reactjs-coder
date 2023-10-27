import { useEffect, useState } from "react"
import ListRecom from "./mostralistrecom/listRecom"
import { getProductsCategoria } from "../../servicios/products"
function MostrarRecom({cat,id}){
const [categ,setCateg] = useState([])
const [Load,setLoad] = useState(false)
useEffect(()=>{
getProductsCategoria(cat)
.then((data)=>{
   const datacateg = data.filter(pro => pro.id !== id)
    setCateg(datacateg)
}
)
.catch(err=>{
    console.error(err)
})
.finally(()=>{
    setLoad(true)
})
},[cat,id])

return(
    <ListRecom Prod={categ}/>             
)
}
export default MostrarRecom