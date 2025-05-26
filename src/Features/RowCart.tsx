import type { ProductType } from '../types'

export const RowCart = ({ item }: { item: ProductType }) => {
    return (
        <tr
            key={item.id}
            className="bg-white border-b bg-gray-800 border-gray-700"
        >
            <th
                scope="row"
                className="px-6 py-4 font-medium text-white-200 text-xl whitespace-nowrap"
            >
                {item.titulo}
            </th>
            <td className="px-6 py-4">
                <img
                    src={item.imagen}
                    alt={item.titulo}
                    className="w-16 h-16 rounded-lg"
                />
            </td>
            <td className="px-6 py-4 text-xl text-white-200">
                {item.cantidad}
            </td>
            <td className="px-6 py-4 text-xl text-white-200">
                ${item.precio * (item.cantidad ?? 1)}
            </td>
        </tr>
    )
}
