import { http } from '.'
import type { CartType } from '../types'
import { v4 as uuidv4 } from 'uuid'

export class CartService {
    static async getCart() {
        try {
            const response = await http.get<CartType[]>(
                import.meta.env.VITE_CART_ENDPOINT,
            )
            return response
        } catch (error) {
            console.error('Error fetching cart', error)
            return null
        }
    }

    static async createCart() {
        const newCart: CartType = {
            id: uuidv4(),
            items: [],
            totalPrice: 0,
            totalItems: 0,
        }
        try {
            const response = await http.post<CartType>(
                import.meta.env.VITE_CART_ENDPOINT,
                newCart,
            )
            return response
        } catch (error) {
            console.error('Error creating cart', error)
            return null
        }
    }

    static async getCartById(id: string) {
        try {
            const response = await http.get<CartType>(
                import.meta.env.VITE_CART_ENDPOINT + `/${id}`,
            )
            return response
        } catch (error) {
            console.error('Error fetching cart by id', error)
            return null
        }
    }

    static async updateCart(cart: CartType) {
        try {
            const response = await http.put<CartType>(
                import.meta.env.VITE_CART_ENDPOINT + `/${cart.id}`,
                cart,
            )
            return response
        } catch (error) {
            console.error('Error fetching cart', error)
            return null
        }
    }
}
