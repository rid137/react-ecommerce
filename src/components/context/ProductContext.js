import React, { createContext, useContext, useState, useEffect } from 'react';
import useFetch from "../customHooks/useFetch";


const FlashDealContext = createContext()

export const ProductContextProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const allProduct = useFetch('https://dummyjson.com/products?skip=0&limit=100')

    const category = useFetch('https://dummyjson.com/products/categories')

    const flashDealProduct = useFetch('https://dummyjson.com/products?skip=0&limit=12') 

    const topCategoryFemaleProduct = useFetch('https://dummyjson.com/products/category/womens-dresses?skip=0&limit=4') 

    const topCategoryMaleProduct = useFetch('https://dummyjson.com/products/category/mens-shirts?skip=0&limit=4')

    const topCategoryJewelleryProduct = useFetch('https://dummyjson.com/products/category/womens-jewellery?skip=0&limit=4')


    const furnitureProducts = useFetch('https://dummyjson.com/products/category/furniture?skip=0&limit=2') 


    const handleClick = (item, id) =>{
        const findProduct = cart.find((product) => product.id === +id)
        if(findProduct) return;
        else {
            const amount = 1
            const sss = {...item , amount}
            setCart([...cart, sss])
        }
    }
    
    const LOCAL_STORAGE_KEY = "cart"

    useEffect(() => {
        const retrivedCarts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        console.log(retrivedCarts)

        if(retrivedCarts) setCart(retrivedCarts)
        console.log(cart)

    }, [])


    useEffect(() => {
        if(cart.length > 0) {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart))
        }
    }, [cart])

   

  return (
    <>
        <FlashDealContext.Provider value={{ allProduct, category, flashDealProduct, topCategoryFemaleProduct, topCategoryMaleProduct, furnitureProducts, topCategoryJewelleryProduct, handleClick, cart, setCart }}>
            {children}
        </FlashDealContext.Provider>
    </>
  );
}

export const Product = () => {
    return useContext(FlashDealContext)
};