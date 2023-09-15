const Itemlistcontainer = ({greeting,clases})=>{
    
   console.log(clases)
    return(
        <div>
            <h2 className = {clases} >{greeting}</h2>
        </div>
    )
}
export default Itemlistcontainer