import { useContext, useState } from "react"
import {isLogged, logUsuario } from "../../../servicios/usuarios"
import { useNavigate } from "react-router-dom"
import {UserContext } from "../../../context/cartContext"
function Login(){
    const[na,setNa]= useState("")
    const[pass,setPass]= useState("")
    const {setSig,setUsername,setpassword} = useContext(UserContext)
    const Navs =useNavigate("")
    console.log(setSig)
    const handlechangeLog = ()=>{
        logUsuario(na,pass).then((data)=>{
            console.log(data.length)
            if(data.length > 0){
                isLogged(na)
                Navs("/")
                setSig(true)
                setUsername(na)
                setpassword(pass)
            }else{
               throw new Error(console.warn("Oh oh...."))
            }
        }
        )
        .catch((err)=>{
        console.error(err)
        })
        .finally(()=>{
            setNa("")
            setPass("")
        })
    }
    return(
        <>
        <form className="form logmargin">
        <p className="title">Login </p>
            <div className="flex">
                
            <label>
            <input required="" placeholder="" type="name" className="input"
            minLength={3}
            maxLength={20}
            value={na}
            onChange={(e)=>{setNa(e.target.value)}}
            />
            <span>Name</span>
        </label>
          
        <label>
            <input required="" placeholder="" type="password" className="input"
            minLength={4}
            maxLength={20}
            value={pass}
            onChange={(e)=>{setPass(e.target.value)}}
            />
            <span>Password</span>
        </label>
            
        </div>  
        <button onClick={handlechangeLog} type="button" className="submit">Submit</button>
        <p className="signin">No tienes una cuenta ? <a href="#">Register</a> </p>
    </form>
        </>
    )
    }
    export default Login