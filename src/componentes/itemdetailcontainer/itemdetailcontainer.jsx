import { useEffect, useState } from "react"
import Itemdetaillist from "./itemdetaillist/itemdetaillist"
import { useParams } from "react-router-dom"
import Loading from "../loading"
import { getProductsId } from "../../servicios/products"
function ItemDetailContainer() {
    const [Load, setLoad] = useState(false)
    const [detail, setDetail] = useState([])
    const { itemid } = useParams()
    useEffect(() => {
        
        getProductsId(itemid)
            .then(data => {
                setDetail(data)
            }).catch(err => {
                console.log(err)
            })
            .finally(()=>{
                setLoad(true)
            })
            return(
                setLoad(false)
            )
    }, [itemid])
    return (
       <>
           
             {(Load != false) ? <Itemdetaillist {...detail} />:<Loading/>}
                
        </> 
    )
}
export default ItemDetailContainer