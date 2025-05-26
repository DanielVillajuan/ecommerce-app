import { NavLink } from 'react-router-dom'

export const AdminBoard = () => {
    return (
        <NavLink
            key="admin"
            to="/admin"
            className={({ isActive }) =>
                `block text-white-200 text-xl p-2 rounded ${isActive ? 'bg-secondary' : 'hover:bg-secondary'}`
            }
        >
            {'Panel de Productos'}
        </NavLink>
    )
}
