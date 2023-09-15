import logo from "./img/logo/logo.png"
import Navbar from "./componentes/navbar";
function Header() {
    return (
        <header className="Headers">
            <div className="Div-inicial-header">
                <img className="Logo-header" src={logo} alt="Logo" />
            </div>
            <Navbar />
        </header>

    )
}
export default Header