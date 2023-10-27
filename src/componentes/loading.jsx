function Loading(){
    return(
        <div className="text-center" style={{width:"100%",height:600,display:"flex" }}>
        <div className="spinner-border" style={{height:120,width:120,margin:"auto"}}  role="status">
          <span className="visually-hidden" style={{width:300,height:300}}>Loading...</span>
        </div>
      </div>
    )
}
export default Loading