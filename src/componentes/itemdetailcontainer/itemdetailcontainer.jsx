import { useEffect, useState } from "react"
import { GetIdProducts } from "../../data/dataid"
import Itemdetaillist from "./itemdetaillist/itemdetaillist"
import { useParams } from "react-router-dom"
function ItemDetailContainer(){
const [detail,setDetail]=useState([])
const { itemid } = useParams()
let num = parseInt(itemid)
useEffect(()=>{
GetIdProducts(num)
.then(data=>{
    console.log(data)
    setDetail(data)
}).catch(err=>{
    console.log(err)
})
},[num])
return(
    <>  
        <Itemdetaillist {...detail} />
    </>
)
}
export default ItemDetailContainer