import { useContext } from 'react'
import { ProductCard } from '../Components/Product'
import { Loading } from '../Components/Loading'
import { ProductContext } from '../context/Product'

export const ProductsList = () => {
    const { loading, error, products } = useContext(ProductContext) ?? {}

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
            {products &&
                products?.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
        </div>
    )
}
