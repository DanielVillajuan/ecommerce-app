import type { CartType, ProductType } from '../types'

export const addProductToCartTransform = (
    cart: CartType,
    product: ProductType,
): CartType => {
    const existingItemIndex = cart.items.findIndex(
        (item) => item.id === product.id,
    )
    if (existingItemIndex !== -1) {
        cart.items[existingItemIndex].cantidad! += 1
    } else {
        cart.items.push({
            ...product,
            cantidad: 1,
        })
    }

    cart.totalPrice += product.precio
    cart.totalItems += 1

    return cart
}
