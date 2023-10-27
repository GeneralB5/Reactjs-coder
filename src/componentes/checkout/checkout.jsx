import { useContext, useEffect, useState } from "react";
import { CartContent, UserContext } from "../../context/cartContext";
import { logUsuario } from "../../servicios/usuarios";
import { getCartAndSendIt } from "../../servicios/products";

function Checkout (){
    const {username,pass}=useContext(UserContext)
    const {cleanCart,cart,total}= useContext(CartContent)
    const [loading,setLoad]=useState(true)
    const [orden,setorden]=useState(false)
    useEffect(()=>{
        setLoad(true)
        logUsuario(username,pass)
                .then((data)=>{
                    
                    let ema=0;
                    
                    data.map((x)=>(
                    ema = x.email))
                    let nom = 0;
                    let cant = 0;
                    let id = 0
                    console.log(cart)
                    cart.map((x)=>{
                        nom=x.name
                        cant=x.stock
                        id = x.id
                    })
                     getCartAndSendIt(username,ema,total,cart,id,setorden,setLoad).then(
                        (data)=>{console.log(data)
                            setLoad(true)
                        })
                     cleanCart()
                })
                .catch(err=>{<h1>un error a ocurrido :{err}</h1>})
                },[])
    if(loading == true){
        return (<div style={{height:700}}>
                    <h1>cargando orden...</h1>
                </div>)
    }
    if(orden){
        return( 
        <div style={{height:700}}>
            <h1>Tu orden es: {orden}</h1>
        </div>
        )
    }
    
}
export default Checkout