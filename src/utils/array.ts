export const isEmpty = <T>(element: T[]): boolean => {
    const isArray = Array.isArray(element)
    if (isArray) return element.length === 0

    return Object.values(element || {}).length === 0
}
