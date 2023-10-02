import { GenreProps, GenreType } from './Genre.types'

const Genre = (props: GenreProps) => {
    const {
        queryData: { genres },
        genreIds,
        className,
    } = props

    const genreFiltered = genreIds
        ? genres.filter((genre: GenreType) => genreIds.includes(genre.id))
        : genres

    return (
        <div className={className}>
            {genreFiltered.map((genre: GenreType, key: number) => (
                <span key={key}>
                    {genre.name}
                    {genreFiltered.length - 1 > key && ','}{' '}
                </span>
            ))}
        </div>
    )
}

export default Genre
