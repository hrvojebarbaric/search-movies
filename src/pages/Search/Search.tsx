import { useSearchParams } from 'react-router-dom'
import withQueryData from '../../components/withQueryData/withQueryData'
import GridMovies from '../../components/GridMovies/GridMovies'
import SearchBar from '../../components/SearchBar/SearchBar'

const Search = () => {
    const [searchParams] = useSearchParams()

    const SearchMovies = withQueryData(GridMovies)
    const query = searchParams.get('query') ?? ''
    const pageQuery = parseInt(searchParams.get('page') ?? '1')
    const page = pageQuery < 1 ? 1 : pageQuery

    return (
        <>
            <SearchBar className="container d-flex align-items-center flex-column py-5" />
            <SearchMovies
                url={`/search/movie?query=${encodeURI(query)}&include_adult=false`}
                page={page}
                queryKey={['search', query, page]}
                className="container text-center pb-md-5 pt-4"
                disableNumberItems={4}
            />
        </>
    )
}

export default Search
