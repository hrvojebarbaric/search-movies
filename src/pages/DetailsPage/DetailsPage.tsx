import { useParams } from 'react-router-dom'
import MovieDetails from '../../components/MovieDetails/MovieDetails'
import withQueryData from '../../components/withQueryData/withQueryData'
import MovieCredits from '../../components/MovieCredits/MovieCredits'
import CarouseMovies from '../../components/CarouseMovies/CarouseMovies'

const DetailsPage = () => {
    const { id } = useParams()
    const Details = withQueryData(MovieDetails)
    const Credits = withQueryData(MovieCredits)
    const RecomendedMovies = withQueryData(CarouseMovies)

    return (
        <>
            <Details url={`/movie/${id}`} queryKey={['MovieDetails', id]} />
            <Credits
                url={`/movie/${id}/credits`}
                queryKey={['MovieCredits', id]}
                disableNumberItems={4}
            />
            <RecomendedMovies
                url={`/movie/${id}/recommendations`}
                page={1}
                queryKey={['recomended', id]}
                className="d-flex flex-column align-items-center pb-md-5 pt-4 bg-body-secondary"
                sectionName="Recomended movies"
            />
        </>
    )
}

export default DetailsPage
