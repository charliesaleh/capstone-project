import React, { createContext, useState } from "react"
import { PRODUCTS as DataBooks } from "../components/DataBooks"
import { PRODUCTS as DataVideos } from "../components/DataVideos"
import { PRODUCTS as DataMerchandise } from "../components/DataMerchandise"
import { PRODUCTS as DataAlbums } from "../components/DataAlbums"
import { PRODUCTS as DataGames } from "./DataGames"
import { PRODUCTS as DataFigures } from "../components/DataFigures"

const AllProducts = [
  ...DataBooks,
  ...DataVideos,
  ...DataMerchandise,
  ...DataAlbums,
  ...DataGames,
  ...DataFigures,
]

export const ShopContext = createContext(null)
const { id, name, price, image } = AllProducts

const getDefaultCart = () => {
  let cart = {}
  for (let i = 1; i < AllProducts.length + 1; i++) {
    cart[i] = 0
  }
  return cart
}

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart())

  const getTotalCartAmount = () => {
    let totalAmount = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = AllProducts.find(
          (product) => product.id === Number(item)
        )
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item]
        }
      }
    }
    return totalAmount
  }

  const addToCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  const updateCartItem = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }))
  }

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItem,
    getTotalCartAmount,
  }
  
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}
