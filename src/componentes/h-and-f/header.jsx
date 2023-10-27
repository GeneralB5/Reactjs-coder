import { useContext, useEffect, useState } from "react"
import logo from "../../img/logo/logo.png"
import { getIsLogged, removedLogged } from "../../servicios/usuarios"
import { UserContext } from "../../context/cartContext"
import CheckedButton from "../button/checkedbutton"
function Header({func,setmod}) {
    const [display,setDisplay] = useState("none")
    const {setSig,sig,username,setUsername}=useContext(UserContext)
//     if(username==false){
// setUsername(false)
// setSig(false)
// removedLogged()
//     }
    const handleclick= ()=>{
        setSig(false)
        removedLogged()
        setUsername(false)
    }
    useEffect(()=>{
        const resp = getIsLogged()
        if(resp.resp== true){
        const nam = resp.name
        setUsername(nam)
        }
        const value = (resp.resp)? "Div-persona":" displayNone"
        setDisplay(value)   
    },[sig,username])
    return (
        <header className="Headers">
            <div className="Div-inicial-header">
                <img className="Logo-header" src={logo} alt="Logo" />
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <CheckedButton funcx={func} setmox={setmod} />
            <div className="Div-interno-header" style={{display:"flex",
            margin:"auto 10px",}}>
                <div className="perfil-label" >
                    <p>{username}</p>
                </div>
                <div>
                <img className={display}/>
                <div className="removed-div" ><button className="remove-button" onClick={handleclick}>Quieres salir de la sesion</button></div>
                </div>
                </div>
                </div>
        </header>

    )
}
export default Header