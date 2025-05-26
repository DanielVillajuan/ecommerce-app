import { Title } from '../Components/Title'
import { ProductsList } from '../Features/ProductList'

export const Home = () => {
    return (
        <div className="flex flex-col overflow-y-auto w-full px-8 py-6 gap-y-8">
            <Title text="Productos" />
            <ProductsList />
        </div>
    )
}
