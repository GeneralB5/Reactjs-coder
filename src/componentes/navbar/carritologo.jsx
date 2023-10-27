import { useContext } from 'react'
import Logocarrito from '../../img/header/shopping-cart-1105049.svg'
import { CartContent } from '../../context/cartContext'
import { Link } from 'react-router-dom'
function Carrito(){
    const {Num} =useContext(CartContent)
    let numero = 0
    if(Num <100 ){
        numero = Num
    }else{
        numero = "+"+99
    }
return(
    <Link to={"/cart"} ><div className='Div-de-logos'>
        <img id='Cart-img' className='Carrito-logo' src={Logocarrito} />
        { (Num != 0) ?
        <div className='Div-D-Num-D-cart'>
            <p style={{color:"#000"}} className='Num-D-cart'>{numero}</p>
        </div> : <div></div>
        }
    </div>
    </Link>
)
}
export default Carrito