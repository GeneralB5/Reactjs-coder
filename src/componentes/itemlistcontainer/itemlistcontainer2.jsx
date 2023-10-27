import { useEffect, useState } from "react"
import Itemlist from "./itemlist/itemlist"
import { useParams } from "react-router-dom"
import Loading from "../loading"
import { getProducts, getProductsCategoria } from "../../servicios/products"
function Itemlistconatainer2({greetings}){
    const [Load, setLoad] = useState(false)
const [productos, setProductos] = useState([])
const {categoriaid}=useParams()
useEffect(()=>{    
    const Func = categoriaid ? getProductsCategoria : getProducts
    Func(categoriaid).then(data=>{
        console.log(data)
        setProductos(data)
        setLoad(true)
    }).catch(err=>console.log(err))
    return(
        setLoad(false)
    )
},[categoriaid])
return(
    <div style={{
        maxWidth:1100,
        margin:"auto"
    }}>
        {(Load != false) ? <Itemlist Productos={productos} /> : (<Loading />)}
    </div>
)
}
export default Itemlistconatainer2