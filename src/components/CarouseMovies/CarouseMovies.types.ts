import { Movie } from '../MovieCard/MovieCard.types'

export type CarouseMoviesProps = {
    queryData: {
        results: Movie[]
    }
    className?: string
    disableNumberItems?: number
    sectionName: string
}
