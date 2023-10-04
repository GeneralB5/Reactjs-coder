import { CartContent } from "../context/cartContext"

const { useState, useContext} = require("react")

function Contador({classes}){
    const [count,setCount] = useState(0)
    const Cart =useContext(CartContent)
    const aumentar = ()=>{
        if(count <10){
        setCount(count + 1)
    }else{
        console.warn("maximo alcanzado")
    }
    }
    const menos = ()=>{
        if(count >0){
        setCount(count - 1)
        
    }else{
        console.warn("minimo")
    }
    }
    let cla = "Div-contador "+ classes
    return(
        <div className={cla}>
            <button onClick={aumentar}>+</button>
            <p>{count}</p>
            <button  onClick={menos}>-</button>
        </div>
    )
}
export default Contador