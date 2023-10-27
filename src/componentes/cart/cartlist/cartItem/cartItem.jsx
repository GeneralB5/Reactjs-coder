import { useContext } from "react"
import { CartContent } from "../../../../context/cartContext"
function CartItem({name,price,stock,img,id}){
   const subtotal= price * stock
   console.log(id)
   const {remItem}= useContext(CartContent)
   const handleonclick= ()=>{
    remItem(id)
   }
 return(
    <div className="divItemCart">
      <img className="imgCartItem" src={img} alt={name} />
        <div className="DivInteriorItemCart">
         <p>Nombre: {name}</p>
         <p>Cantidad elegida: {stock}</p>
         <p>Precio: {price}</p>
         <p>Subtotal: {subtotal}</p>
        </div>
        <button onClick={handleonclick} style={{
          background:"#fefefe",
          border:"1px solid #000",
          borderRadius:"50%",
          width:25,
          height:25,
          margin:"auto"
        }}>X</button>
    </div>
 )
}
export default CartItem