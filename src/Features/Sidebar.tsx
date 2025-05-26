import { NavLink } from 'react-router-dom'

export const Sidebar = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex min-h-screen">
            <aside className="w-64 bg-primary text-white-100 p-4 space-y-4">
                <h2 className="p-4 text-2xl font-bold border-b border-gray-600">
                    Tienda
                </h2>
                <nav className="flex flex-col p-4 border-b text-white-200 text-xl border-gray-600 gap-y-4">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `block p-2 rounded ${isActive ? 'bg-secondary' : 'hover:bg-secondary'}`
                        }
                    >
                        Inicio
                    </NavLink>
                    <NavLink
                        to="/carrito"
                        className={({ isActive }) =>
                            `block p-2 rounded ${isActive ? 'bg-secondary' : 'hover:bg-secondary'}`
                        }
                    >
                        Carrito
                    </NavLink>
                    <NavLink
                        to="/Ofertas"
                        className={({ isActive }) =>
                            `block p-2 rounded ${isActive ? 'bg-secondary' : 'hover:bg-secondary'}`
                        }
                    >
                        Ofertas
                    </NavLink>
                    <NavLink
                        to="/mis-compras"
                        className={({ isActive }) =>
                            `block p-2 rounded ${isActive ? 'bg-secondary' : 'hover:bg-secondary'}`
                        }
                    >
                        Mis Compras
                    </NavLink>
                </nav>
            </aside>
            <main className="flex-1">{children}</main>
        </div>
    )
}
