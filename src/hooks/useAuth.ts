import { useContext, useState } from 'react'
import { AuthContext } from '../context/Auth'
import { useNavigate } from 'react-router-dom'

export const useAuth = () => {
    const { login, register } = useContext(AuthContext) ?? {}
    const [error, setError] = useState<string | null>(null)
    const navigate = useNavigate()

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const username = formData.get('username')?.toString() ?? ''
        const password = formData.get('password')?.toString() ?? ''

        if (!username || !password) {
            setError('Username and password are required')
            return
        }
        try {
            await login!(username, password)
            setError(null)
            navigate('/')
        } catch (err: unknown) {
            console.error('Login failed', err)
            if (err instanceof Error) {
                setError(err.message ?? 'Login failed')
            }
        }
    }

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const username = formData.get('username')?.toString() ?? ''
        const password = formData.get('password')?.toString() ?? ''
        const confirmPassword =
            formData.get('confirmPassword')?.toString() ?? ''

        if (!username || !password || !confirmPassword) {
            setError('All fields are required')
            return
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match')
            return
        }

        try {
            await register!(username, password)
            setError(null)
            navigate('/login')
        } catch (err: unknown) {
            console.error('Registration failed', err)
            if (err instanceof Error) {
                setError(err.message || 'Registration failed')
            }
        }
    }

    return {
        handleLogin,
        handleRegister,
        error,
    }
}
