import { useEffect, useRef, useState } from "react"
import { addUsers, getUsuario } from "../../../servicios/usuarios"
import { useNavigate } from "react-router-dom"

function Register(){
    const [na,setNa] = useState("")
    const [ema,setema] = useState("")
    const [pass,setpass] = useState("")
    const [passTwo,setpasstwo] = useState("")
    const form = useRef()
    const navs = useNavigate()
    useEffect(()=>{
        form.current.reset()
        setNa("")
        setema("")
        setpass("")
        setpasstwo("")
    },[])
    const handlechangeReg = ()=>{
        getUsuario(na,pass).then((x)=>{
console.log(x)
        if(pass === passTwo && na && ema && pass && x == null){
 addUsers(na,pass,ema)
 navs("/login")
}else{
console.error("Hubo un error en el intento de ingresar su informacion")
}
}
).catch((err)=>{console.log(err)})
.finally(()=>{
    form.current.reset()
setNa("")
 setema("")
 setpass("")
 setpasstwo("")
})
}

return(
    <>
    <form ref={form} className="form">
    <p className="title">Register </p>
    <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
        <label>
            <input required="" placeholder="" type="text" className="input"
            minLength={3}
            maxLength={15}
            value={na}
            onChange={(e)=>{setNa(e.target.value)}}
            />
            <span>Firstname</span>
        </label>

        <label>
            <input required="" placeholder="" type="text" className="input"
            minLength={3}
            maxLength={15}
            />
            <span>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input required="" placeholder="" type="email" className="input"
        minLength={4}
        maxLength={30}
        value={ema}
        onChange={(e)=>{setema(e.target.value)}}
        />
        <span>Email</span>
    </label> 
        
    <label>
        <input required="" placeholder="" type="password" className="input"
        minLength={4}
        maxLength={15}
        value={pass}
        onChange={(e)=>{setpass(e.target.value)}}
        />
        <span>Password</span>
    </label>
    <label>
        <input required="" placeholder="" type="password" className="input"
value={passTwo}
onChange={(e)=>{setpasstwo(e.target.value)}}
        minLength={4}
        maxLength={15}
        />
        <span>Confirm password</span>
    </label>
    <button onClick={handlechangeReg} type="button" className="submit">Submit</button>
    <p className="signin">Tienes ya una cuenta? <a href="#">Signin</a> </p>
</form>
    </>
)
}
export default Register