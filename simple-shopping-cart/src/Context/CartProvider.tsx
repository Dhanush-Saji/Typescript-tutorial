import React,{ createContext, useEffect, useState } from "react"

export type CartType = {
    id:number,
    title:string,
    price:number,
    image:string,
}
export type ChildrenType = {children?: React.ReactNode | React.ReactNode[];}


export const CartContext = createContext<CartType[] | null>(null)

export const CartProvider = ({children}:ChildrenType) =>{
    const [cartProducts, setcartProducts] = useState<CartType[]>([])
    const addToCart = (item:CartType) =>{
        setcartProducts([...cartProducts,item])
    }
    return(
        <CartContext.Provider value={{cartProducts,addToCart}}>
            {children}
        </CartContext.Provider>
    )
}