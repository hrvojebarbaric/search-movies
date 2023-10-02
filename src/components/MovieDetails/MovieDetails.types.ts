import { GenreType } from '../MovieCard/Genre/Genre.types'

export type MovieDetailsProps = {
    queryData: {
        backdrop_path: string
        poster_path: string
        title: string
        genres: GenreType[]
        runtime: number
        release_date: string
        budget: number
        revenue: number
        vote_average: number
        overview: string
    }
}
