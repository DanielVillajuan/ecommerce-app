import { useEffect, useState } from 'react'
import { isEmpty } from '../utils/array'
import { EmptyCart } from '../Features/EmptyCart'
import type { CartType } from '../types'
import { CartService } from '../services/cart'
import { RowCart } from '../Features/RowCart'

export const Cart = () => {
    const headerTable = ['Producto', 'Album', 'Cantidad', 'Precio']
    const [cart, setCart] = useState<CartType | null>(null)

    useEffect(() => {
        const getCart = async () => {
            const cartMockId = '18JuZg346lLsbPOk8YVkkmT'
            const response = await CartService.getCartById(cartMockId)
            console.log(response)
            setCart(response)
        }

        getCart()
    }, [])

    if (!cart || isEmpty(cart.items)) return <EmptyCart />

    return (
        <div className="flex flex-col overflow-y-auto w-full px-8 py-6 gap-y-8">
            <h1 className="text-gray-600 text-4xl font-bold">
                Tu carrito de compras
            </h1>
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
