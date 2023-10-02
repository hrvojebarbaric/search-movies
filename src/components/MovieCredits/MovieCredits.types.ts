export type MovieCreditsProps = {
    queryData: {
        cast: Credits[]
        crew: Credits[]
    }
    disableNumberItems?: number
}

export type Credits = {
    character: string
    name: string
    profile_path: string
    known_for_department: string
}
