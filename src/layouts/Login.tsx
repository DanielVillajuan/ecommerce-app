import { useAuth } from '../hooks/useAuth'

export const Login = () => {
    const { handleLogin, error } = useAuth()

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white-100 p-8 rounded-2xl shadow-md w-96">
                <h2 className="text-2xl text-gray-700 font-bold mb-6 text-center">
                    Iniciar Sesión
                </h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label
                            className="block text-sm font-medium mb-2 text-gray-700"
                            htmlFor="username"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            className="w-full p-2 border border-gray-300 text-gray-700 rounded"
                            placeholder="Ingrese su username"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-sm font-medium mb-2 text-gray-700"
                            htmlFor="password"
                        >
                            Contraseña
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="w-full p-2 border border-gray-300 text-gray-700 rounded"
                            placeholder="Ingrese su contraseña"
                        />
                    </div>
                    {error && (
                        <div className="text-red-500 font-bold text-sm mb-4">
                            {error}
                        </div>
                    )}
                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-2 rounded hover:bg-secondary transition-colors"
                    >
                        Iniciar Sesión
                    </button>
                </form>
            </div>
        </div>
    )
}
