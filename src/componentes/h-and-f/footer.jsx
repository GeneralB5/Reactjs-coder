import { Link } from "react-router-dom";
import Logo from "../../img/logo/logo.png";
import facebook from "../../icons/facebook.png";
import insta from "../../icons/instagram.png";
import twitter from "../../icons/twitter.png";
function Footer(){
return(
    <footer className="Footers" >

        <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",width:200}} >
        <img className="SocialMedia" src={facebook} alt="Facebook" />
        <img className="SocialMedia" src={twitter} alt="Twitter" />
        <img className="SocialMedia" src={insta} alt="Instagram" />
        </div>
        <div style={{width:200}}>
            <img className="Logo-Footer" src={Logo} alt="Logo" />
        </div>
        <div style={{
            width:200,
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            gap:10,
            marginRight:10
        }}>
            <div style={{borderRight:"1px solid #000 ",
        paddingRight:10}}>
            <Link to={"/login/a"} >Log-in</Link>
            </div>
            <Link to={"/register"}>Register</Link>
        </div>

    </footer>
)
}
export default Footer