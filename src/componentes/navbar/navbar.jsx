import Carritologo from "./carritologo"
function Navbar (){
return(
    <div className="Nav-Divss">
    <nav className="navbar-header">
        <a href="">Deportes</a><br></br>
        <a href="">Muebles</a><br></br>
        <a href="">Libreria</a><br></br>
        <a href="">Utencilios</a><br></br>
    </nav>
    <h2 className="h2-header" >{"SafeMarket"}</h2>
    <Carritologo />
    </div>
)
}
export default Navbar