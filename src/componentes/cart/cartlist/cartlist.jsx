import CartItem from "./cartItem/cartItem"

function CartList({productos}){
return(
    <div style={{display:"flex",
    marginTop:10,
    flexDirection:"column",
    gap:10,
    justifyContent:"center",
    alignItems:"center"}}>
        {productos.map((data)=>(<CartItem {...data} />))}
    </div>
)
}
export default CartList