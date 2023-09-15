import Itemlistcontainer from "./itemlistcontainer"
import Carritologo from "./carritologo.jsx"
function Navbar (){
return(
    <div className="Nav-Divss">
    <nav className="navbar-header">
        <a href="">Deportes</a><br></br>
        <a href="">Muebles</a><br></br>
        <a href="">Libreria</a><br></br>
        <a href="">Utencilios</a><br></br>
    </nav>
    <Itemlistcontainer greeting={"SafeMarket"} clases={"h2-header"} />
    <Carritologo />
    </div>
)
}
export default Navbar