import { http } from '.'
import type { AuthType } from '../types'
import { v4 as uuidv4 } from 'uuid'

export class AuthService {
    static async findByUsername(username: string) {
        try {
            const response = await http.get<AuthType[]>(
                import.meta.env.VITE_AUTH_ENDPOINT + '?username=' + username,
            )
            return response[0]
        } catch (error) {
            console.error('Error fetching cart', error)
            return null
        }
    }

    static async create(username: string, password: string, rol?: string) {
        const newUser: AuthType = {
            id: uuidv4(),
            username,
            password,
            rol: rol ?? 'user',
        }
        try {
            const response = await http.post<AuthType>(
                import.meta.env.VITE_AUTH_ENDPOINT,
                newUser,
            )
            return response
        } catch (error) {
            console.error('Error creating cart', error)
            return null
        }
    }
}
