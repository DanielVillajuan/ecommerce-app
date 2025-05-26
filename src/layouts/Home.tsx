import { ProductsList } from '../Features/ProductList'

export const Home = () => {
    return (
        <div className="overflow-y-auto w-full p-4">
            <h1 className="text-gray-600 text-2xl font-bold">Productos</h1>
            <ProductsList />
        </div>
    )
}
