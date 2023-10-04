import Layout from "../componentes/layout/layout"
import Itemlistconatainer2 from "../componentes/itemlistcontainer/itemlistcontainer2"
import ItemDetailContainer from "../componentes/itemdetailcontainer/itemdetailcontainer"
function Home(){
return(
    <>
        <Itemlistconatainer2 greeting={"Buenas Coder :)"} />
        <ItemDetailContainer />
    </>
)
}
export default Home