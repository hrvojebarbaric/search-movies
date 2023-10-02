import Image from '../Image/Image'
import Genre from '../MovieCard/Genre/Genre'
import { MovieDetailsProps } from './MovieDetails.types'
import styles from './MovieDetails.module.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import withQueryData from '../withQueryData/withQueryData'
import MovieVideo from '../MovieVideo/MovieVideo'
import { useParams } from 'react-router-dom'

const MovieDetails = (props: MovieDetailsProps) => {
    const {
        queryData: {
            backdrop_path,
            poster_path,
            title,
            genres,
            runtime,
            release_date,
            budget,
            revenue,
            vote_average,
            overview,
        },
    } = props

    const { id } = useParams()
    const Video = withQueryData(MovieVideo)
    const europeDate = new Date(release_date)

    const dollarFormatting = {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    }

    return (
        <div
            className={styles.detailsWrapper}
            style={{ backgroundImage: `url(http://image.tmdb.org/t/p/w1280${backdrop_path})` }}
        >
            <div className={styles.backgroundImageCover} />
            <div className="container d-flex flex-column flex-lg-row py-5">
                <Image
                    className={`${styles.imagePoster}`}
                    src={poster_path}
                    width={200}
                    alt={title}
                    disableLazyLoad={true}
                />
                <div className="col-12 col-lg-6 ps-4 mt-4">
                    <h1 className="h2 fw-bold">
                        {title} ({europeDate.getFullYear()})
                    </h1>
                    <div className="d-flex flex-column flex-sm-row mb-3">
                        <p className="pe-sm-2 mb-0">{europeDate.toLocaleDateString('en-GB')}</p>
                        <p className="px-sm-2 mb-0"> {runtime} min</p>
                        <Genre
                            queryData={{
                                genres: genres,
                            }}
                            className="px-sm-2 mb-0"
                        />
                    </div>
                    <div className="d-flex">
                        <CircularProgressbar
                            className={`${styles.progressBar}`}
                            value={vote_average}
                            maxValue={10}
                            text={`${vote_average.toFixed(1)}`}
                            styles={buildStyles({
                                pathColor: `#000000`,
                                textColor: '#000000',
                                trailColor: '#d6d6d6',
                                backgroundColor: '#000000',
                            })}
                        />
                        <Video url={`/movie/${id}/videos`} queryKey={['MovieVideo', id]} />
                    </div>
                    <div className="my-3">
                        <h2>Overview</h2>
                        <p>{overview}</p>
                    </div>
                    <p className="mb-0">
                        Budget: {budget.toLocaleString('en-US', dollarFormatting)}
                    </p>
                    <p>Revenue: {revenue.toLocaleString('en-US', dollarFormatting)}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails
