import logo from "../../img/logo/logo.png"
function Header() {
    return (
        <header className="Headers">
            <div className="Div-inicial-header">
                <img className="Logo-header" src={logo} alt="Logo" />
            </div>
        </header>

    )
}
export default Header