export type GenreProps = {
    queryData: {
        genres: GenreType[]
    }
    genreIds?: number[]
    className?: string
}

export type GenreType = {
    id: number
    name: string
}
