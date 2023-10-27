import Carritologo from "./carritologo"
import {NavLink} from "react-router-dom"
function Navbar (){
return(
    <div className="Nav-Divss">
    <nav className="navbar-header">
        <NavLink to="/" style={{background:"transparent"}} className={({isActive})=>isActive ? "activeOption":"options"} >Home</NavLink>
        <div className="dropdown">
        <button className=" options buttonCategoria">Categoria</button>
        <div className="hiddenDropdown">
        <NavLink to="/categoria/television" className={({isActive})=>isActive ? "activeOption":"option"} >Television</NavLink>
        <NavLink to="/categoria/laptops" className={({isActive})=>isActive ? "activeOption":"option"} >Laptops</NavLink>
        <NavLink to="/categoria/celulares" className={({isActive})=>isActive ? "activeOption":"option"} >Celulares</NavLink>
        </div>
        </div>
    </nav>
    <h2 className="h2-header" >{"SafeMarket"}</h2>
    <Carritologo />
    </div>
)
}
export default Navbar