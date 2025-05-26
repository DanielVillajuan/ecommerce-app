import { http } from '.'
import type { ProductType } from '../types/products'

export class Products {
    static async getProducts(): Promise<ProductType[] | null> {
        try {
            const response = await http.get<ProductType[]>(
                import.meta.env.VITE_PRODUCTS_ENDPOINT,
            )
            return response
        } catch (error) {
            console.error('Error products', error)
            return null
        }
    }
    static async getProductById(id: string) {
        try {
            const response = await http.get<ProductType>(
                import.meta.env.VITE_PRODUCTS_ENDPOINT + `/${id}`,
            )
            return response
        } catch (error) {
            console.error('Error product by id', error)
            return null
        }
    }
}
