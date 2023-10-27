import {Routes,Route} from "react-router-dom" 
import Itemlistcontainer2 from "./componentes/itemlistcontainer/itemlistcontainer2"
import Itemdetailcontainer from "./componentes/itemdetailcontainer/itemdetailcontainer"
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./componentes/navbar/navbar";
import Layout from "./componentes/layout/layout";
import { FacilitadorContext  } from "./context/cartContext";
import Loginprinc from "./componentes/login/loginpric";
import RegisterAddUsers from "./componentes/login/registeraddusers";
import Cart from "./componentes/cart/cart";
import Checkout from "./componentes/checkout/checkout";
function App() {
  return (
    <FacilitadorContext>
    <Layout>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Itemlistcontainer2 />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/Checkout" element={<Checkout/>} />
    <Route path="/login/:a"   element={<Loginprinc />} />
    <Route path="/register" element={<RegisterAddUsers  />}/>
    <Route path="/categoria/:categoriaid" element={<Itemlistcontainer2/>}/>
    <Route path="/detail/:itemid" element={<Itemdetailcontainer />} /> 
    <Route path="*" element={<h1>Error 404</h1>} />
     </Routes>
    </Layout>   
    </FacilitadorContext>
  );
}
export default App;
