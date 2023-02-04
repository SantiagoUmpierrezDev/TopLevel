import { createContext, useContext, useEffect, useState } from "react";


export const CartContext = createContext();

export const useCartContext = () => {
    return useContext(CartContext)
}

const init = JSON.parse(localStorage.getItem('cart')) || []

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(init)

    const addToCart = (item) => {
      setCart([...cart, item])
    }
  
    const removeItem = (id) => {
      setCart( cart.filter(item => item.id !== id) )
    }
  
    const isInCart = (id) => {
      return cart.some(item => item.id === id)
    }
  
    const emptycart = () => {
      setCart([])
    }
  
    const cartTotal = () => {
      return cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    }

    const totalQuantity = () => {
        return cart.reduce((acc, item) => acc + parseInt(item.quantity, 10), 0)
    }

    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeItem,
            isInCart,
            emptycart,
            cartTotal,
            totalQuantity
        }}>
            {children}
        </CartContext.Provider>

    )
}