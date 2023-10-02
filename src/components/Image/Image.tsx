import { ImageProps } from './Image.types'

const Image = (props: ImageProps) => {
    const { src, width, alt, className = '', disableLazyLoad = false } = props

    const lazyLoadClassName = disableLazyLoad ? '' : 'lazyload'
    const imageUrl = src ? `http://image.tmdb.org/t/p/w${width}${src}` : '/images/noImage.png'

    return (
        <img src={imageUrl} alt={alt} className={`img-fluid ${className} ${lazyLoadClassName}`} />
    )
}

export default Image
