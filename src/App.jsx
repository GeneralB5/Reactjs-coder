import {Routes,Route} from "react-router-dom" 
import Itemlistcontainer2 from "./componentes/itemlistcontainer/itemlistcontainer2"
import Itemdetailcontainer from "./componentes/itemdetailcontainer/itemdetailcontainer"
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./componentes/navbar/navbar";
import Layout from "./componentes/layout/layout";
import { FacilitadorContext } from "./context/cartContext";
function App() {
  
  return (
    <FacilitadorContext>
    <Layout>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Itemlistcontainer2 />} />   
    <Route path="/categoria/:categoriaid" element={<Itemlistcontainer2/>}/>
    <Route path="/detail/:itemid" element={<Itemdetailcontainer />} /> 
    <Route path="*" element={<h1>Error 404</h1>} />
     </Routes>
    </Layout>   
    </FacilitadorContext>
  );
}
export default App;
