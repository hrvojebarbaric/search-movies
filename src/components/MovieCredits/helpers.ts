import { Credits } from './MovieCredits.types'

export const removeDuplicates = (arr: Credits[]) => {
    const uniqueName: string[] = []
    const unique = arr.filter((element) => {
        const isDuplicate = uniqueName.includes(element.name)
        if (!isDuplicate) {
            uniqueName.push(element.name)
            return true
        }
        return false
    })

    return unique
}
