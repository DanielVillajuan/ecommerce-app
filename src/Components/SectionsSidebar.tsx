import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/Auth'

export const SectionsSidebar = () => {
    const { isAuthenticated } = useContext(AuthContext) ?? {}
    const links = [
        { to: '/', label: 'Inicio' },
        { to: '/carrito', label: 'Carrito', hidden: !isAuthenticated },
        { to: '/Ofertas', label: 'Ofertas', hidden: !isAuthenticated },
        { to: '/mis-compras', label: 'Mis Compras', hidden: !isAuthenticated },
        { to: '/login', label: 'Iniciar Sesión', hidden: isAuthenticated },
        { to: '/register', label: 'Registrarse', hidden: isAuthenticated },
    ]
    return (
        <nav className="flex flex-col p-4 border-b text-white-200 text-xl border-gray-600 gap-y-4">
            {links.map((link) => {
                if (link.hidden) return null

                return (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        className={({ isActive }) =>
                            `block p-2 rounded ${isActive ? 'bg-secondary' : 'hover:bg-secondary'}`
                        }
                    >
                        {link.label}
                    </NavLink>
                )
            })}
        </nav>
    )
}
