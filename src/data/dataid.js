import { Products } from "./productos";
export const GetIdProducts= (num)=>{
    return(
        new Promise(resolve=>{
            setTimeout(()=>{
                resolve(
                  Products.find(pro => pro.id === num)
                    )
                }
            ,300)
        })
    )
}