import Carritologo from "./carritologo"
import {NavLink} from "react-router-dom"
function Navbar (){
return(
    <div className="Nav-Divss">
    <nav className="navbar-header">
        <NavLink to="/" className={({isActive})=>isActive ? "activeOption":"option"} >Home</NavLink>
        <NavLink to="/categoria/television" className={({isActive})=>isActive ? "activeOption":"option"} >Television</NavLink>
        <NavLink to="/categoria/laptops" className={({isActive})=>isActive ? "activeOption":"option"} >Laptops</NavLink>
        <NavLink to="/categoria/celulares" className={({isActive})=>isActive ? "activeOption":"option"} >Celulares</NavLink>
    </nav>
    <h2 className="h2-header" >{"SafeMarket"}</h2>
    <Carritologo />
    </div>
)
}
export default Navbar