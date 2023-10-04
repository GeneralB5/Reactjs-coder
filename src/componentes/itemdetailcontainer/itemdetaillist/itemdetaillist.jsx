import Contador from "../../contador"

function Itemdetaillist({ name, price }) {
    return (
        <div className="card mb-3 divDetailContainer">
            <div className="row g-0 ">
                <div className="col-md-4">
                    <img src="https://media.es.wired.com/photos/631ec3ef64fe55a038bdc9a8/3:2/pass/How-to-Choose-a-Laptop-Gear-GettyImages-1235728903.jpg" className="img-fluid rounded-start img-detail" alt="..." />
                </div>
                <div className="col-md-8 Div-centerInterno">
                    <div className="card-body">
                        <h1 className="card-title">{name}</h1>
                        <p style={{ fontSize: "vh" }} className="card-text Text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p>Stock disponible: 24</p>
                    </div>
                    <div className="DivContadorPrecio" >
                        <div style={{
                            display: "flex",
                            gap: 10
                        }}>
                            <h2 className="Price-p">${price}</h2>
                            <h2>Cantidad:</h2>
                        </div>
                        <Contador classes={"contador-espc"} />
                    </div>
                    <button className="Btn">
                        Comprar
                    </button>
                </div>
            </div>
        </div>

    )
}
export default Itemdetaillist