import { ProductsList } from '../Features/ProductList'

export const Home = () => {
    return (
        <div className="flex flex-col overflow-y-auto w-full px-8 py-6 gap-y-8">
            <h1 className="text-gray-600 text-4xl font-bold">Productos</h1>
            <ProductsList />
        </div>
    )
}
