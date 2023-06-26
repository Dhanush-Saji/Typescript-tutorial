import React,{ createContext, useState } from "react"

export type CartType = {
    id:number,
    title:string,
    price:number,
    image:string,
}
export type ChildrenType = {children?: React.ReactNode | React.ReactNode[];}

export type CartContextProps = {
    cartProducts:CartType[],
    addToCart:Function,
    deleteFromCart:Function
}
let CartContextPropsValue = {
    cartProducts:[],
    addToCart:Function,
    deleteFromCart:Function
}
export const CartContext = createContext<CartContextProps | null>(CartContextPropsValue)

export const CartProvider = ({children}:ChildrenType) =>{
    const [cartProducts, setcartProducts] = useState<CartType[]>([])
    const addToCart = (item:CartType) =>{
        setcartProducts([...cartProducts,item])
    }
    const deleteFromCart = (product:CartType) =>{
        let filteredData = cartProducts.filter((item)=>{
            return item.id !== product.id
        })
        setcartProducts(filteredData)
    }
    return(
        <CartContext.Provider value={{addToCart,cartProducts,deleteFromCart}}>
            {children}
        </CartContext.Provider>
    )
}