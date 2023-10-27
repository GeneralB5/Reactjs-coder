import Header from '../h-and-f/header';
import Footer from '../h-and-f/footer';
import { useEffect, useState } from 'react';
import { getMode, setModeDark, setModeLight } from '../../servicios/modes';
function Layout({children}){
  const [mo,setMo]= useState(0)
  const [setmo,setSetmo]= useState(false)
  const [sig,setSig] = useState(0)
  useEffect(()=>{
  getMode().then((data)=>{
      setMo(data)
      if(data =="dark"){
        setSetmo(true) 
      }else{
       setSetmo(false)
      }
      
  })
  .catch(err=> console.log(err))
  }
  ,[sig,setmo])
      const modsAUsar = ()=>{
        if(setmo == true){
          setModeLight()
            setSig(2)
            setSetmo(false)
        }else{
          setModeDark()
          setSig(1)
          setSetmo(true)
        }
      }
    return(
        <>
        <Header func={modsAUsar} setmod={setMo}/>
        <div className={mo}>
        {children}
        </div>
        <Footer />
        </>
    )
}
export default Layout