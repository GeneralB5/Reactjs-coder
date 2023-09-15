const { useState } = require("react")

function Contador(){
    const [count,setCount] = useState(0)
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

    return(
        <div className="Div-contador">
            <button onClick={aumentar}>+</button>
            <p>{count}</p>
            <button  onClick={menos}>-</button>
        </div>
    )
}
export default Contador