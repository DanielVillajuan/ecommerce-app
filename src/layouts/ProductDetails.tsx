import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Products } from '../services/products'
import type { ProductType } from '../types'
import { toast, ToastContainer } from 'react-toastify'
import { CartService } from '../services/cart'
import { addProductToCartTransform } from '../helper/ProductToCart'

export const ProductDetails = () => {
    const [item, setItem] = useState<ProductType | null>(null)
    const { id } = useParams<{ id: string }>()
    const cartMockId = '18JuZg346lLsbPOk8YVkkmT'

    useEffect(() => {
        const fetchProductDetails = async () => {
            const product = await Products.getProductById(id ?? '')
            setItem(product)
        }
        fetchProductDetails()
    }, [id])

    const addProductToCart = async () => {
        const cartFinded = await CartService.getCartById(cartMockId)
        if (cartFinded && item) {
            const cartModified = addProductToCartTransform(cartFinded, item)
            const response = await CartService.updateCart(cartModified)
            if (response) {
                toast(`💪 Album ${item?.titulo} agregado.`, {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    theme: 'colored',
                    className: 'bg-primary text-white-100',
                })
            }
        }
    }

    return (
        <section className="flex m-10 px-5 py-10 h-4/5 bg-white-100 rounded-lg">
            <ToastContainer limit={3} />
            <div className="flex lg:w-4/5 mx-auto">
                <img
                    alt={item?.titulo ?? ''}
                    className="lg:w-1/2 object-fit w-full rounded border border-gray-200"
                    src={item?.imagen ?? ''}
                />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col justify-between">
                    <div className="flex flex-col gap-y-4">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">
                            Album
                        </h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                            {item?.titulo ?? ''}
                        </h1>

                        <p className="leading-relaxed text-gray-700">
                            {item?.descripcion ?? ''}
                        </p>
                    </div>

                    <div className="flex">
                        <span className="title-font font-medium text-4xl text-gray-900">
                            ${item?.precio ?? 0}
                        </span>
                        <button
                            onClick={addProductToCart}
                            className="flex ml-auto text-white-100 hover:text-gray-700 bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded"
                        >
                            Agregar Carrito
                        </button>
                        <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                            <svg
                                fill="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
