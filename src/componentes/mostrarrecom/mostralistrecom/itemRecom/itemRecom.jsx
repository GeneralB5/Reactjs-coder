import { Link } from "react-router-dom"
function ItemRecom({img,name,id}){
    
return(
    <>
    <Link className="Div-recom" style={{
        backgroundImage:`url(${img})`,
        backgroundPosition:"center",
        backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                textDecoration:"none",
        }} to={`/detail/${id}`}>
    <div   >
        <h2 className="H2-Divrecom">{name}</h2>
    </div>
    </Link>
    </>
)
}
export default ItemRecom