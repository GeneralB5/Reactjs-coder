import { createContext, useContext, useEffect, useState } from "react";

export const CartContent = createContext({
    cart : []
})
export const UserContext =createContext({})

export const FacilitadorContext = ({children})=> {
    const [sig,setSig]=useState(false)
    const [total,setTotal]=useState(0)
    const [cart ,setCart]=useState([])
    const [pass,setpassword]=useState(false)
    const [username,setUsername] = useState(false)
    const [Num,setNum]=useState(0)
    const [initSig,setInitSig]= useState(false)
    useEffect(()=>{
        if(initSig === false){
           const xs = JSON.parse(localStorage.getItem("carrito"))
            setCart(xs)
            setInitSig(true)
        }
   const func = ()=>{  
    if(cart.length>0){
    const numerocart = cart.map((data)=>{
            const stock = data.stock
            return stock
        })
      const numerfinal = numerocart.reduce((acc,curre)=>acc+curre,0)
        setNum(numerfinal)
    }
    }
    const func2 = ()=>{
        const Total = cart.map((data)=>{
            const precio = data.price 
            const stock =  data.stock
            const totales = precio*stock
            return totales
        })
      const numerfinal = Total.reduce((acc,curre)=>acc+curre,0)
        setTotal(numerfinal)
    }
    localStorage.setItem("carrito",JSON.stringify(cart))  
    func()
    func2()
    },[cart])
    

    const cleanCart=()=>{
        setCart([])
        localStorage.removeItem("carrito")
    }


     const addItem=(nom,precio,cant,id,img)=>{
 if(!verifi(id)){
    const item = {name:nom,price:precio,stock:cant,id:id,img:img}
 setCart(prev=>[...prev,item])
 
 }else{
     console.log("ya existe")
 }
}
const verifi=(id)=>{
    return cart.some((x)=>(x.id === id))
 }
 const remItem=(itemid)=>{
 const nuevoCart = cart.filter((x)=>(x.id !== itemid))
 setCart(nuevoCart)
 localStorage.setItem("carrito",JSON.stringify(nuevoCart))
 }
console.log(cart)


    return(
        <UserContext.Provider value={{sig,setSig,username,setUsername,pass,setpassword}}>
        <CartContent.Provider value={{cart,Num,total,setCart,cleanCart,addItem,remItem}}>
            {children}
        </CartContent.Provider>
        </UserContext.Provider>
    )
}

