import Item from "./items/item"
function Itemlist({Productos}){
console.log(Productos)
return (<div className="Div-containers1">
       {Productos.map( (Product) =>
       (
       <Item key={Product.id} {...Product} />
       ))}
    </div>)
}
export default Itemlist