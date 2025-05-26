export type ProductType = {
    id: string
    titulo: string
    descripcion: string
    precio: number
    categoria: string
    stock: number
    imagen?: string
    cantidad?: number
}

export type CartType = {
    id: string
    items: ProductType[]
    totalPrice: number
    totalItems: number
}

export type AuthType = {
    id: string
    username: string
    password: string
    rol: string
}
