import { useContext } from 'react'
import { AuthContext } from '../context/Auth'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = () => {
    const { isAuthenticated } = useContext(AuthContext) ?? {}
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }

    return <Outlet />
}
