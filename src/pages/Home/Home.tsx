import SearchBar from '../../components/SearchBar/SearchBar'
import CarouseMovies from '../../components/CarouseMovies/CarouseMovies'
import GridMovies from '../../components/GridMovies/GridMovies'
import withQueryData from '../../components/withQueryData/withQueryData'

const Home = () => {
    const TopRatedMovies = withQueryData(CarouseMovies)
    const UpComingMovies = withQueryData(GridMovies)

    return (
        <>
            <SearchBar className="container d-flex align-items-center flex-column py-5" />
            <TopRatedMovies
                url="/movie/top_rated"
                page={1}
                queryKey={['topRated']}
                className="d-flex flex-column align-items-center pb-md-5 pt-4 bg-body-secondary"
                disableNumberItems={4}
                sectionName="Top rated movies"
            />
            <UpComingMovies
                url="/movie/upcoming"
                page={1}
                queryKey={['upComing']}
                className="container text-center pb-md-5 pt-4"
            />
        </>
    )
}

export default Home
