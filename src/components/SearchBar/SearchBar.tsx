import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SearchBarProps, queryResult } from './SearchBar.types'
import styles from './SearchBar.module.css'
import { getMovieData } from '../../api/movies'
import Image from '../Image/Image'

const SearchBar = ({ className }: SearchBarProps) => {
    const [inputText, setInputText] = useState('')
    const [searchData, setSearchData] = useState<queryResult | null>()
    const [showAutocomplete, setShowAutocomplete] = useState(false)
    const navigate = useNavigate()

    const getAutocompleteData = async () => {
        await getMovieData(
            `/search/movie?query=${encodeURI(inputText)}&include_adult=false`,
            1
        ).then((data) => setSearchData(data))
        setShowAutocomplete(true)
    }

    useEffect(() => {
        inputText.length > 2 && getAutocompleteData()
    }, [inputText])

    const handleKeyPress = (e: React.KeyboardEvent) => {
        e.key === 'Enter' && inputText !== '' && navigate(`/search?query=${inputText}&page=1`)
    }

    const handleButtonSearch = () => {
        inputText !== '' && navigate(`/search?query=${inputText}&page=1`)
    }

    const handleClearSearch = () => {
        setSearchData(null)
        setInputText('')
        setShowAutocomplete(false)
    }

    return (
        <div className={className}>
            <h1 className="mb-3 h-2 fw-bold">Search movies</h1>
            <InputGroup className={`${styles.searchBar} mb-3`}>
                <Form.Control
                    aria-label={inputText}
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyUp={(e) => handleKeyPress(e)}
                />
                <Button variant="dark" onClick={handleButtonSearch}>
                    Search
                </Button>
                <div
                    className={styles.autoComplete}
                    style={{ display: showAutocomplete ? 'block' : 'none' }}
                >
                    <div className={styles.results}>
                        {searchData?.results.slice(0, 5).map((item, key) => {
                            const releaseDate = new Date(item.release_date)
                            return (
                                <Link to={`/movie/${item.id}`} className={styles.link} key={key}>
                                    <Image
                                        src={item.poster_path}
                                        width={200}
                                        alt={item.title}
                                        disableLazyLoad={false}
                                        className={styles.image}
                                    />
                                    {item.title} ({releaseDate.getFullYear()})
                                </Link>
                            )
                        })}
                        <span onClick={handleClearSearch} className={styles.closeSearch}>
                            X
                        </span>
                    </div>
                </div>
            </InputGroup>
        </div>
    )
}

export default SearchBar
