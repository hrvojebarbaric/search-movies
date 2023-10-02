import { useSearchParams } from 'react-router-dom'
import MovieCard from '../MovieCard/MovieCard'
import { Movie } from '../MovieCard/MovieCard.types'
import GridPagination from './GridPagination/GridPagination'
import { GridMoviesProps } from './GridMovies.types'

const GridMovies = (props: GridMoviesProps) => {
    const {
        queryData: { results, total_pages, total_results },
        queryKey,
        className,
        disableNumberItems = 0,
    } = props

    const [searchParams] = useSearchParams()
    const query = searchParams.get('query') ?? 'no results'

    const isSearchPage: boolean = queryKey.includes('search')
    const title = isSearchPage ? `Here is what we found for: ${query}` : 'Upcoming movies'

    const renderPagination = isSearchPage && total_results > 20 && (
        <div className="d-flex flex-column justify-content-center my-4">
            <GridPagination className="m-auto" total_pages={total_pages} />
            <span className="my-2">Total results: {total_results}</span>
        </div>
    )

    return (
        <div className={className}>
            <h2 className="my-5 h-2 fw-bold">{title}</h2>
            {renderPagination}
            <div className="row row-eq-height justify-content-center">
                {results.map((movie: Movie, key: number) => {
                    const disableLazy = disableNumberItems > key
                    return (
                        <MovieCard
                            id={movie.id}
                            key={key}
                            imgSrc={movie.poster_path}
                            title={movie.title}
                            releaseDate={movie.release_date}
                            genreIds={movie.genre_ids}
                            className="col-12 col-sm-6 col-md-4 col-lg-3 pb-2 text-start d-flex flex-column align-items-center justify-content-start"
                            disableLazyLoad={disableLazy}
                        />
                    )
                })}
            </div>
            {renderPagination}
        </div>
    )
}

export default GridMovies
