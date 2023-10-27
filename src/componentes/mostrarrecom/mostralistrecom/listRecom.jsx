import ItemRecom from "./itemRecom/itemRecom"

function ListRecom({Prod}){
    return (<div className="Divs-recom">
           {Prod.map( (Pro) =>
           (
            <>
           <ItemRecom key={Pro.id} {...Pro}/>
           </>
           ))}
        </div>)
    }
export default ListRecom