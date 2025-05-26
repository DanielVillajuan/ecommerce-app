import { createContext, useEffect, useState, type ReactNode } from 'react'
import type { CartType, ProductType } from '../types'
import { CartService } from '../services/cart'

type CartContextType = {
    add: (product: ProductType) => void
    modify: (id: string, product: ProductType) => void
    removeAll: () => void
    cart: CartType | null
    setCart: (cart: CartType | null) => void
}

export const cartContext = createContext<CartContextType | null>(null)

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartType | null>(null)
    useEffect(() => {
        const getCart = async () => {
            const cartMockId = '18JuZg346lLsbPOk8YVkkmT'
            const response = await CartService.getCartById(cartMockId)
            setCart(response)
        }

        getCart()
    }, [])

    const add = (product: ProductType) => {
        const productFinded = cart?.items.find((item) => item.id === product.id)
        const newItem = { ...product, cantidad: 1 }

        setCart((prevCart) => {
            if (!prevCart) return null
            if (!productFinded) {
                return {
                    ...prevCart,
                    items: [...(prevCart?.items || []), newItem],
                }
            }
            const updatedItems = prevCart.items.map((item) => {
                if (item.id === product.id) {
                    return { ...item, cantidad: item.cantidad! + 1 }
                }
                return item
            })
            return { ...prevCart, items: updatedItems }
        })
    }

    const modify = (id: string, product: ProductType) => {
        setCart((prevCart) => {
            if (!prevCart) return null
            const updatedItems = prevCart.items.map((item) => {
                if (item.id === id) {
                    return { ...item, ...product }
                }
                return item
            })
            return { ...prevCart, items: updatedItems }
        })
    }
    const removeAll = () => {
        setCart((prevCart) => {
            if (!prevCart) return null
            return { ...prevCart, items: [] }
        })
    }
    return (
        <cartContext.Provider value={{ add, modify, removeAll, cart, setCart }}>
            {children}
        </cartContext.Provider>
    )
}
