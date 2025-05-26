import { NavLink } from 'react-router-dom'

export const Sidebar = ({ children }: { children: React.ReactNode }) => {
    const links = [
        { to: '/', label: 'Inicio' },
        { to: '/carrito', label: 'Carrito' },
        { to: '/Ofertas', label: 'Ofertas' },
        { to: '/mis-compras', label: 'Mis Compras' },
    ]
    return (
        <div className="flex min-h-screen">
            <aside className="w-64 bg-primary text-white-100 p-4 space-y-4">
                <h2 className="p-4 text-2xl font-bold border-b border-gray-600">
                    Tienda
                </h2>
                <nav className="flex flex-col p-4 border-b text-white-200 text-xl border-gray-600 gap-y-4">
                    {links.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) =>
                                `block p-2 rounded ${isActive ? 'bg-secondary' : 'hover:bg-secondary'}`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>
            </aside>
            <main className="flex-1">{children}</main>
        </div>
    )
}
