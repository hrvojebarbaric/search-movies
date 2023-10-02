import Spinner from 'react-bootstrap/Spinner'

const Loader = () => {
    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <Spinner animation="border" variant="dark" />
        </div>
    )
}

export default Loader
