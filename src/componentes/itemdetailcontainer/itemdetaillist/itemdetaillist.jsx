import Contador from "../../contador"
import Comments from "../../comentario/coments"
import MostrarRecom from "../../mostrarrecom/mostrarrecom"
import { useContext, useState } from "react"
import { CartContent } from "../../../context/cartContext"
import { Link } from "react-router-dom"
function Itemdetaillist({ name, precio,stock,img,id,categoria }) {
    const [count,setCount] = useState(0)
    const [qu,setQu]=useState(0)
    const sto = (stock >0) ? (stock):("No hay stock")
    const handleOnAdd = (quan)=>{
        if(quan > 0){
        setCount(quan)
        }else{console.log("No has elegido nada")}
    }
    console.log(count)
    const {addItem}=useContext(CartContent)
    const handleclick= ()=>{
        if(count > 0){
        addItem(name,precio,count,id,img)
        setQu(count)
    }else(console.log("No has elegido nada"))
    }
    console.log(img)
    return (
        <>
        <div className="div-itemdetailcontainer-comentarios" >
        <div className="card mb-3 divDetailContainer">
            <div className="row g-0 ">
                <div className="col-md-4">
                    <img src={img} className="img-fluid rounded-start img-detail" alt="..." />
                </div>
                <div className="col-md-8 Div-centerInterno">
                    <div className="card-body">
                        <h1 className="card-title">{name}</h1>
                        <p style={{ fontSize: "vh" }} className="card-text Text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p>Stock disponible: {sto}</p>
                    </div>
                    {(qu == 0)? <div className="DivContadorPrecio" >
                        <div style={{
                            display: "flex",
                            gap: 10
                        }}>
                            <h2 className="Price-p">${precio}</h2>
                            <h2>Cantidad:</h2>
                        </div>
                        <Contador classes={"contador-espc"} stock={stock} onAdd={handleOnAdd} />
                    </div> :<></>}
                    {(qu == 0)?(<button onClick={handleclick} className="Btn">
                        Agregar a carrito
                    </button>):(<Link className="Btn" style={{marginTop:10,fontSize:20,textAlign:"center"}} to={"/cart"}>Ir a carrito</Link>)}
                </div>
            </div>
        </div>
        <Comments />
        </div>
        <MostrarRecom cat={categoria} id={id} /> 
</>
    )
}
export default Itemdetaillist