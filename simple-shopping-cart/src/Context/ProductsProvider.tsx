import React,{ createContext, useEffect, useState } from "react"

export type ProductType = {
    id:number,
    title:string,
    price:number,
    image:string,
}
export type ChildrenType = {children?: React.ReactNode | React.ReactNode[];}


export const ProductsContext = createContext<ProductType[] | null>(null)

export const ProductProvider = ({children}:ChildrenType) =>{
    const [products, setproducts] = useState<ProductType[]>([])
    useEffect(()=>{
        const fetchProducts = async() =>{
            try {
                const response = await fetch("https://fakestoreapi.com/products/");
                const data = await response.json();
                console.log(data);
                return data;
            } catch (err) {
               if(err instanceof Error) console.log(err.message)
            }
        }
        fetchProducts().then(product => setproducts(product))
    },[])
    return(
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    )
}