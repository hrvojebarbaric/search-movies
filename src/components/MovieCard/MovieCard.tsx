import Image from '../Image/Image'
import Genre from './Genre/Genre'
import { MovieCardProps } from './MovieCard.types'
import withQueryData from '../withQueryData/withQueryData'
import { Link } from 'react-router-dom'

const MovieCard = (props: MovieCardProps) => {
    const {
        imgSrc,
        title,
        releaseDate,
        rating,
        genreIds,
        className,
        id,
        disableLazyLoad = false,
    } = props

    const GenreData = withQueryData(Genre)

    const europeDate = new Date(releaseDate)

    return (
        <Link to={`/movie/${id}`} className={`${className} remove-link-style`}>
            <Image
                src={imgSrc}
                alt={title}
                width={500}
                disableLazyLoad={disableLazyLoad}
                className="object-fit-cover"
            />
            <div className="w-100 p-3">
                <h3 className="fs-5 ">{title}</h3>
                <div>
                    <span className="fw-semibold">Release date: </span>
                    {europeDate.toLocaleDateString('en-GB')}
                </div>
                {rating && (
                    <div>
                        <span className="fw-semibold">Rating: </span>
                        {rating}
                    </div>
                )}
                <div>
                    <span className="fw-semibold">Geners: </span>
                    <GenreData url="/genre/movie/list" queryKey={['genre']} genreIds={genreIds} />
                </div>
            </div>
        </Link>
    )
}

export default MovieCard
