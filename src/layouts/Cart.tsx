import { useContext } from 'react'
import { isEmpty } from '../utils/array'
import { EmptyCart } from '../Features/EmptyCart'
import { RowCart } from '../Features/RowCart'
import { cartContext } from '../context/Cart'
import { Title } from '../Components/Title'
import { headerTable } from '../constants/headerTable'

export const Cart = () => {
    const { cart } = useContext(cartContext) ?? {}

    if (!cart || isEmpty(cart.items)) return <EmptyCart />

    return (
        <div className="flex flex-col overflow-y-auto w-full px-8 py-6 gap-y-8">
            <Title text="Tu carrito de compras" />
            <table className="w-full rounded-lg overflow-hidden text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-300 uppercase bg-gray-700 ">
                    <tr>
                        {headerTable.map((header) => (
                            <th
                                key={header}
                                scope="col"
                                className="px-6 py-3 font-medium text-white-200"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {cart.items.map((item) => (
                        <RowCart key={item.id} item={item} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}
