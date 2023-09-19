function Item(name,price,img,stock,id){
    return(
        <>
         <h2 style={{
            fontSize:18,
            fontFamily:"fantasy"
        }}>{name}</h2>
        <img src="" alt={name} />
        <p>{price}</p>
        </>
    )
}
export default Item