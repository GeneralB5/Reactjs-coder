import { useContext } from 'react'
import Logocarrito from '../../img/header/shopping-cart-1105049.svg'
import { CartContent } from '../../context/cartContext'
function Carrito(){
    const numCart =useContext(CartContent)
return(
    <div className='Div-de-logos'>
        <img id='Cart-img' className='Carrito-logo' src={Logocarrito} />
        <div className='Div-D-Num-D-cart'>
            <p className='Num-D-cart'>0</p>
        </div>
    </div>
)
}
export default Carrito