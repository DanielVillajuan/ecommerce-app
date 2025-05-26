import bcrypt from 'bcryptjs'

export const createHash = async (password: string) => {
    const salts = await bcrypt.genSalt(10)
    return bcrypt.hash(password, salts)
}

export const passwordValidation = async (username: string, password: string) =>
    bcrypt.compare(password, username)
