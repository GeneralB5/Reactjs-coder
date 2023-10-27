import {collection, doc, getDoc, getDocs, getFirestore, query, setDoc, where} from "firebase/firestore";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBx6TyYuqnE2VoWqlQL6aMhgL-pUuT6-Jc",
  authDomain: "reactjs-proyectofinal.firebaseapp.com",
  projectId: "reactjs-proyectofinal",
  storageBucket: "reactjs-proyectofinal.appspot.com",
  messagingSenderId: "209754525812",
  appId: "1:209754525812:web:bd783d1e3d0926cc58c121"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const getUsuarios = async ()=>{
    const prodlist = collection(db,"usuarios")
     const getProdList = await getDocs(prodlist)
    const datos = getProdList.docs.map((x)=>{
        const data= x.data()
        return {id:x.id,...data}
     })
     return datos
};
    
    const getUsuario = async(na,pass)=>{
        const prodcollect = collection(db,"usuarios")
        const prodlist = query(prodcollect,where("name","==",na),where("password","==",pass))
        const getprod = await getDocs(prodlist)
        const datos = getprod.docs.map((x)=>{  
            const y = x.data
            return {...y}
        
        })
        console.log(datos)
    if(datos.length >0){
        return {...datos}
        }else{
            return null
        }
        }
        const logUsuario = async(na,pass)=>{
            const prodcollect = collection(db,"usuarios")
            const prodlist = query(prodcollect,where("name","==",na),where("password","==",pass))
            const getprod = await getDocs(prodlist)
            const datos = getprod.docs.map((x)=>{  
                const y = x.data()
                return {...y}
            
            })
            console.log(datos)
            return datos
           
        }

        const addUsers= async (na,pass,ema)=>{
            const users = collection(db,"usuarios")
            await setDoc(doc(users,),{
                email: ema,
                name: na,
                password: pass
            })
        }
        const isLogged= (user)=>{
            const isLogged = true
            localStorage.setItem("Logged",JSON.stringify({key:isLogged,name:user}))
        }
        const getIsLogged= ()=>{
            const x = JSON.parse(localStorage.getItem("Logged"))
            let name = null;
            let key = 0;
            if(x){
             name = x.name
             key = x.key
        } 
            const resp = (x) ? true:false
            return {resp,name}
        }
        
        const removedLogged=()=>{
            localStorage.removeItem("Logged")
        }

        export {getUsuarios,getUsuario,addUsers,logUsuario,isLogged,getIsLogged,removedLogged}