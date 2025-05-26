import { useContext } from 'react'
import { Title } from '../Components/Title'
import { ProductContext } from '../context/Product'
import { DashboardRow } from '../Components/DashboardRow'

export const Dashboard = () => {
    const { products } = useContext(ProductContext) ?? {}
    return (
        <div className="flex flex-col overflow-y-auto w-full px-8 py-6 gap-y-8">
            <Title text="Dashboard" />
            <table className="w-full rounded-lg overflow-hidden text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-300 uppercase bg-gray-700 ">
                    <tr>
                        {['Producto', 'Album', 'Precio', 'Acción'].map(
                            (header) => (
                                <th
                                    key={header}
                                    scope="col"
                                    className="px-6 py-3 font-medium text-white-200"
                                >
                                    {header}
                                </th>
                            ),
                        )}
                    </tr>
                </thead>
                <tbody>
                    {products &&
                        products.map((item) => (
                            <DashboardRow key={item.id} item={item} />
                        ))}
                </tbody>
            </table>
        </div>
    )
}
