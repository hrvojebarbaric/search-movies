import { ReactNode, useEffect } from 'react'
import Pagination from 'react-bootstrap/Pagination'
import { GridPaginationProps } from './GridPagination.types'
import { useSearchParams } from 'react-router-dom'

const GridPagination = (props: GridPaginationProps) => {
    const { className, total_pages } = props
    const [searchParams, setSearchParams] = useSearchParams()

    const query = searchParams.get('query') ?? ''
    const page = parseInt(searchParams.get('page') ?? '1')

    useEffect(() => {
        if (page > total_pages) {
            setSearchParams({ query: query, page: `${total_pages}` })
        } else if (page < 1) {
            setSearchParams({ query: query, page: `${1}` })
        }
    }, [page])

    let pageButtons: ReactNode[] = []
    for (let number = 1; number <= total_pages; number++) {
        pageButtons.push(
            <Pagination.Item
                key={number}
                active={number === page}
                onClick={() => setSearchParams({ query: query, page: `${number}` })}
            >
                {number}
            </Pagination.Item>
        )
    }

    const handlePrevNext = (pageNum: number) => {
        setSearchParams({ query: query, page: `${pageNum}` })
    }

    return (
        <Pagination className={className} size="sm">
            {page === 1 ? (
                <Pagination.Prev disabled />
            ) : (
                <Pagination.Prev onClick={() => handlePrevNext(page - 1)} />
            )}
            {pageButtons}
            {page !== total_pages ? (
                <Pagination.Next onClick={() => handlePrevNext(page + 1)} />
            ) : (
                <Pagination.Next disabled />
            )}
        </Pagination>
    )
}

export default GridPagination
