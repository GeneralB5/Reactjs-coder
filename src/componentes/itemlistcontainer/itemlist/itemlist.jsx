import Item from "./items/item"
function Itemlist(productos){
console.log(productos)
return (<div style={{
    backgroundColor: "lightgray",
    borderRadius: 15,

}}>
       {productos.map( product =>{<Item key={product.id} {...product} />})}
    </div>)
}
export default Itemlist