import { CartContent } from "../context/cartContext"

const { useState, useContext} = require("react")

function Contador({classes,stock,onAdd}){
    const [count,setCount] = useState(0)
    const aumentar = ()=>{
        const res = (count <stock)? setCount(count + 1):console.warn("maximo alcanzado")
    }
    const menos = ()=>{
        const res = (count > 0)? setCount(count - 1) : console.warn("minimo alcanzado")
    }
    let cla = "Div-contador "+ classes
    return(
        <div className={cla}>
            <button onClick={aumentar}>+</button>
            <p onChange={onAdd(count)}>{count}</p>
            <button  onClick={menos}>-</button>
        </div>
    )
}
export default Contador