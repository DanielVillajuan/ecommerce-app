import { useEffect, useState } from 'react'
import { Products } from '../services/products'

export const ProductsList = () => {
    const [products, setProducts] = useState<Products[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const getProducts = async () => {
            const list = await Products.getProducts()
            if (!list) {
                setError(true)
                return
            }
            console.log(list)
            setProducts(list)
        }
        getProducts()
    }, [])
    return <></>
}
