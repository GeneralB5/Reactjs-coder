import Contador from "./componentes/contador";
import Itemlistcontainer from "./componentes/itemlistcontainer/itemlistcontainer";
import Navbar from "./componentes/navbar/navbar"
function App() {
  
  return (
    <>
    <Navbar />
     <Itemlistcontainer greeting={"Buenas Coder :)"} />     
    <Contador />
    
    </>   
  );
}
export default App;
