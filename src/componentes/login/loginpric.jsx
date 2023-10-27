import { useContext, useEffect, useState } from "react"
import Login from "./login&register/login"
import Loading from "../loading"
import { UserContext } from "../../context/cartContext"
function Loginprinc(){
        const [load,setLoad]= useState(false)
        const {username} = useContext(UserContext)
        useEffect(()=>{
                setTimeout(( setLoad(true),2000))
        },[])
    return(
        <div className="divLogin " >   
            {(load != false) ? ((username == false) ? <Login/>: <h2>Uds ya esta logueado!!!</h2> ) :<Loading/>}
        </div>
    )
}
export default Loginprinc