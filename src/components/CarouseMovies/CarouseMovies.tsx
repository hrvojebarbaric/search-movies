import Slider from 'react-slick'
import MovieCard from '../MovieCard/MovieCard'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Movie } from '../MovieCard/MovieCard.types'
import { CarouseMoviesProps } from './CarouseMovies.types'

const CarouseMovies = (props: CarouseMoviesProps) => {
    const {
        queryData: { results },
        className,
        disableNumberItems = 0,
        sectionName,
    } = props

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    }

    return (
        <div className={className}>
            <h2 className="my-5 h-2 fw-">{sectionName}</h2>
            <Slider {...settings} className="container">
                {results.map((movie: Movie, key: number) => {
                    const disableLazy = disableNumberItems > key
                    return (
                        <MovieCard
                            id={movie.id}
                            key={key}
                            imgSrc={movie.poster_path}
                            title={movie.title}
                            releaseDate={movie.release_date}
                            rating={movie.vote_average}
                            genreIds={movie.genre_ids}
                            disableLazyLoad={disableLazy}
                        />
                    )
                })}
            </Slider>
        </div>
    )
}

export default CarouseMovies
