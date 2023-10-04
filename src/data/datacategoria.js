import { Products } from "./productos";
export const GetCategoriaProducts= (cat)=>{
    return(
        new Promise(resolve=>{
            setTimeout(()=>{
                resolve(
                Products.filter(pro => pro.categoria === cat)
                    )
                }
            ,300)
        })
    )
}