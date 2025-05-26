import { useNavigate } from 'react-router-dom'
import type { ProductType } from '../types'
type ProductProps = {
    item: ProductType
}

export const ProductCard = ({ item }: ProductProps) => {
    const navigate = useNavigate()
    return (
        <button
            className="bg-white-100 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col items-start"
            onClick={() => navigate(`/item/${item.id}`)}
        >
            <img
                src={item.imagen}
                alt={item.titulo}
                className="w-full h-48 object-cover rounded-t-lg"
            />
            <h2 className="text-xl text-gray-500 hover:text-primary font-semibold mt-2">
                {item.titulo}
            </h2>
            <p className="text-gray-600 font-bold text-2xl mt-1">
                ${item.precio}
            </p>
            <p className="text-gray-500 mt-1">{item.descripcion}</p>
        </button>
    )
}
