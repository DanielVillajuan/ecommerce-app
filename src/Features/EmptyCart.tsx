export const EmptyCart = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl text-gray-800 font-bold mb-4">
                Tu carrito
            </h1>
            <p className="text-gray-600">
                Actualmente no has elegido ningun producto.
            </p>
        </div>
    )
}
