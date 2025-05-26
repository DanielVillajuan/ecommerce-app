export const isAdmin = () => {
    return (
        localStorage.getItem('isAuth') === 'true' &&
        localStorage.getItem('rol') === 'admin'
    )
}
