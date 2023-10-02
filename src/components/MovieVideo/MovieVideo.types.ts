export type MovieVideoProps = {
    queryData: {
        results: MovieVideoType[]
    }
}

export type MovieVideoType = {
    size: number
    type: string
    key: string
    name: string
}
