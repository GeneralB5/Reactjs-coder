import { createContext, useContext, useState } from "react";

export const CartContent = createContext()
export const FacilitadorContext = ({children})=> {
    const [Num,setNum]=useState(0)

    return(
        <CartContent.Provider value={{Num,setNum}}>
            {children}
        </CartContent.Provider>
    )
}

