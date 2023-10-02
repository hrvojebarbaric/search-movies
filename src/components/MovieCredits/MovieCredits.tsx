import { MovieCreditsProps } from './MovieCredits.types'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CreditsCard from './CreditsCard/CreditsCard'
import { removeDuplicates } from './helpers'

const MovieCredits = (props: MovieCreditsProps) => {
    const {
        queryData: { cast, crew },
        disableNumberItems = 0,
    } = props

    const settings = {
        dots: false,
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
                    dots: false,
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
    const castCard = removeDuplicates(cast).map((cast, key) => {
        const disableLazy = disableNumberItems > key
        return (
            <CreditsCard
                key={key}
                imgSrc={cast.profile_path}
                name={cast.name}
                characterName={cast.character}
                department={cast.known_for_department}
                disableLazyLoad={disableLazy}
            />
        )
    })

    const crewCard = removeDuplicates(crew).map((crew, key) => (
        <CreditsCard
            key={key}
            imgSrc={crew.profile_path}
            name={crew.name}
            characterName={crew.character}
            department={crew.known_for_department}
        />
    ))

    return (
        <>
            <div className="d-flex flex-column align-items-center pb-md-5 pt-4 bg-body-secondary">
                <h2 className="my-5 h-2 fw-">Cast</h2>
                <Slider {...settings} className="container">
                    {castCard}
                </Slider>
            </div>
            <div className="d-flex flex-column align-items-center pb-5 pt-4 bg-body-secondary">
                <h2 className="my-5 h-2 fw-">Crew</h2>
                <Slider {...settings} className="container">
                    {crewCard}
                </Slider>
            </div>
        </>
    )
}

export default MovieCredits
