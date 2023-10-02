import { useQuery } from '@tanstack/react-query'
import { getMovieData } from '../../api/movies'
import { WrappedComponentProps } from './withQueryData.types'
import Loader from '../Loader/Loader'

const withQueryData = (WrappedComponent: React.ComponentType<WrappedComponentProps>) => {
    return (props: any) => {
        const { url, page, queryKey } = props

        const query = useQuery({
            queryKey: queryKey,
            queryFn: () => getMovieData(url, page),
        })

        if (query.isLoading) return <Loader />
        if (query.isError) return <div className="text-center">Opsss! Something went wrong.</div>

        return <WrappedComponent {...props} queryData={query.data} />
    }
}

export default withQueryData
