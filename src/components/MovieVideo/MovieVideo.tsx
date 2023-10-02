import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import styles from './ModalVideo.module.css'
import { MovieVideoProps } from './MovieVideo.types'
import Button from 'react-bootstrap/Button'

const MovieVideo = (props: MovieVideoProps) => {
    const {
        queryData: { results },
    } = props

    const [show, setShow] = useState(false)

    const videoSrc = results.filter((video) => video.type === 'Trailer')

    return (
        <>
            <Button variant="dark" className="ms-2" onClick={() => setShow(true)}>
                Play Video
            </Button>
            <Modal show={show} onHide={() => setShow(false)} size="xl">
                <Modal.Body className={styles.modalBody}>
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${videoSrc[0]?.key}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                        className={styles.videoIframe}
                    />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default MovieVideo
