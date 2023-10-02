import { Movie } from '../MovieCard/MovieCard.types'

export type GridMoviesProps = {
    queryData: {
        results: Movie[]
        total_pages: number
        total_results: number
    }
    queryKey: string[]
    className?: string
    disableNumberItems?: number
}
