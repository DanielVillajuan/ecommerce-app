import { createContext, useEffect, useState } from 'react'
import { Products } from '../services/products'
import type { ProductType } from '../types'
import { isEmpty } from '../utils/array'

type ProductContextType = {
    products: ProductType[]
    loading: boolean
    error: boolean
}

export const ProductContext = createContext<ProductContextType | null>(null)

export const ProductProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [products, setProducts] = useState<ProductType[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const list = await Products.getProducts()
            if (!list) {
                setError(true)
                setLoading(false)
                return
            }
            setProducts(list)
            setLoading(false)
        }
        if (isEmpty(products)) {
            getProducts()
        }
    }, [])
    return (
        <ProductContext.Provider value={{ products, loading, error }}>
            {children}
        </ProductContext.Provider>
    )
}
