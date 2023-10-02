export type MovieCardProps = {
    id: number
    imgSrc: string
    title: string
    releaseDate: string
    rating?: number
    genreIds: number[]
    className?: string
    disableLazyLoad?: boolean
}

export type Movie = {
    poster_path: string
    title: string
    release_date: string
    vote_average: number
    genre_ids: number[]
    id: number
}
