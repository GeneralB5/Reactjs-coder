import { useContext } from "react"
import CartList from "./cartlist/cartlist"
import { CartContent} from "../../context/cartContext"
import { getIsLogged} from "../../servicios/usuarios"
import { useNavigate } from "react-router-dom"
function Cart(){
    const {cleanCart,cart,total}= useContext(CartContent)
    const navs = useNavigate()
    	const handleclickReset = ()=>{
            cleanCart()
        }
        const handleclickSubmit= ()=>{
            const key =getIsLogged()
            console.log(key)
            if(key){
            navs("/Checkout")
            }else{
                alert("no estas registrado")
            }
        }
    return(
        <>
        <div style={{display:"flex",
    flexDirection:"column",
    gap:10,
    alignItems:"center",
    margin:0,
    minHeight:700
    }}>
    
            {(cart.length > 0) ? 
            (<>
            <CartList productos={cart}  />
            <div style={{display:"flex",
                        gap:10,
                        margin:10
        }}  >
            <h2>Total:{total}</h2>
            <button className="button-cart" onClick={handleclickReset}>Resetear carrito</button>
            <button className="button-cart" onClick={handleclickSubmit}>Submit compra</button>
            </div>
            </>)
            :(
            <div style={{height:700,
                width:"100%",
                backgroundImage:"url(https://static.vecteezy.com/system/resources/thumbnails/002/204/194/small_2x/technology-background-design-in-white-color-free-vector.jpg)",
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover"
            }}>
                <h2 style={{
                    margin:300,
                    fontSize:39
                }}>No has guardado nada todavia....</h2>
                </div> 
                ) }

        </div>
        </>
    )
}
export default Cart