import {Timestamp, addDoc, collection, doc, documentId, getDoc, getDocs, getFirestore, query, setDoc, where, writeBatch} from "firebase/firestore";
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
const getProducts = async ()=>{
    const prodlist = collection(db,"Item")
     const getProdList = await getDocs(prodlist)
    const datos = getProdList.docs.map((x)=>{
        const data= x.data()
        return {id:x.id,...data}
     })
     return datos
};

    const getProductsCategoria = async(cat)=>{
    const prodlist = query(collection(db,"Item"),where("categoria","==",cat))
    const getProdList = await getDocs(prodlist)
    const datos = getProdList.docs.map((x)=>{
        const data= x.data()
        return {id:x.id,...data}
     })
     return datos
    }

    const getProductsId = async(id)=>{
        const prodlist = doc(db,"Item",id)
        const getprod = await getDoc(prodlist)
        const datos = getprod.data()
    
         return {id,...datos}
        }
        const actualizarStock= async(id,cart,order,setId,setload)=>{
            const ba = writeBatch(db)
            const prodlist = query(collection(db,"Item"),where(documentId(),"==",id))
            const getProdList = await getDocs(prodlist)
            const OOS = []
            const {docs} = getProdList
            docs.forEach((x)=>{
                const dt = x.data()
                const sto = dt.stock
                
                const APC = cart.find(pro => pro.id === x.id)
                
                const  quanChange = APC?.stock
                
                if(sto >= quanChange){
                    console.log("auuu")
                    ba.update(x.ref,{stock: sto - quanChange})
                }else{
                    OOS.push({id,...cart})
                }
            })
            if(OOS.length === 0){
                await ba.commit()
                const collec = collection(db,"Tickets")
                const addOrder = await addDoc(collec,order)
                setId(addOrder.id)
                setload(false)
            }else{
                console.log("hubo un error")
            }
            console.log(doc)
        }

     const getCartAndSendIt = async (name,email,total,pro,id,setId,setload)=>{
        const na = name
        const ema = email
        const orden ={
            buyer:{
                name:na,
                email:ema
            },
            total:total,
            productos:pro,
            date: Timestamp.fromDate(new Date())               
        }
        actualizarStock(id,pro,orden,setId,setload)
     }
export {getProducts,getProductsCategoria,getProductsId,getCartAndSendIt}