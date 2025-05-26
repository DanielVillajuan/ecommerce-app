import { useEffect, useState } from 'react'
import { Products } from '../services/products'
import { isEmpty } from '../utils/array'
import { ProductCard } from '../Components/Product'
import { Loading } from '../Components/Loading'
import type { ProductType } from '../types'

export const ProductsList = () => {
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

    if (loading) {
        return (
            <div className="flex justify-center items-center h-full">
                <Loading />
            </div>
        )
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-full">
                <p className="text-red-500">Error al cargar los productos</p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {products.length > 0 &&
                products.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
        </div>
    )
}
