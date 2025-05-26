import { createContext, useState } from 'react'
import { AuthService } from '../services/auth'
import { createHash, passwordValidation } from '../utils/encrypt'

type AuthContextType = {
    isAuthenticated: boolean
    login: (username: string, password: string) => Promise<void>
    register: (username: string, password: string) => Promise<void>
}

export const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const isAuth = localStorage.getItem('isAuth') ?? ''
    const [isAuthenticated, setIsAuthenticated] = useState(!!isAuth)

    const login = async (username: string, password: string) => {
        const userfinded = await AuthService.findByUsername(username)
        if (!userfinded) {
            throw Error('User not found')
        }
        const isValidPass = await passwordValidation(
            userfinded.password,
            password,
        )
        if (!isValidPass) {
            throw Error('Invalid password')
        }
        setIsAuthenticated(true)
        localStorage.setItem('isAuth', 'true')
        localStorage.setItem('rol', userfinded.rol ?? 'user')
    }

    const register = async (username: string, password: string) => {
        const userfinded = await AuthService.findByUsername(username)
        if (userfinded) {
            throw new Error('User has ready exists')
        }
        const passwordEnctypted = await createHash(password)
        await AuthService.create(username, passwordEnctypted)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, register }}>
            {children}
        </AuthContext.Provider>
    )
}
