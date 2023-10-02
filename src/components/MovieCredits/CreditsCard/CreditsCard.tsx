import Card from 'react-bootstrap/Card'
import Image from '../../Image/Image'
import { CreditsCardProps } from './CreditsCard.types'

const CreditsCard = (props: CreditsCardProps) => {
    const { imgSrc, name, characterName, department, disableLazyLoad = false } = props
    return (
        <Card>
            <Image
                src={imgSrc}
                width={500}
                alt={name}
                disableLazyLoad={disableLazyLoad}
                className={'object-fit-cover h-75'}
            />
            <Card.Body>
                <Card.Title className="fw-bold">{characterName}</Card.Title>
                <Card.Text className="mb-0">
                    <span className="fw-bold">Name:</span> {name}
                </Card.Text>
                <Card.Text className="mb-0">
                    <span className="fw-bold">Role:</span> {department}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CreditsCard
