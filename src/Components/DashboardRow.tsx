import { FaRegEdit, FaRegSave } from 'react-icons/fa'
import type { ProductType } from '../types'
import { useState } from 'react'
import { MdOutlineCancel } from 'react-icons/md'

export const DashboardRow = ({ item }: { item: ProductType }) => {
    const [isEdit, setIsEdit] = useState(false)
    const handleEdit = () => setIsEdit(true)
    const saveProduct = () => {
        setIsEdit(false)
    }
    const cancel = () => setIsEdit(false)
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
                ${item.precio * (item.cantidad ?? 1)}
            </td>
            <td className="px-6 py-4 text-xl text-white-200">
                {!isEdit && (
                    <button onClick={handleEdit}>
                        <FaRegEdit />
                    </button>
                )}
                {isEdit && (
                    <div className="flex gap-x-4 justify-start items-start">
                        <button className="text-xl" onClick={saveProduct}>
                            <FaRegSave />
                        </button>
                        <button className="text-xl" onClick={cancel}>
                            <MdOutlineCancel />
                        </button>
                    </div>
                )}
            </td>
        </tr>
    )
}
