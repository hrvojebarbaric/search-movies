import axios from 'axios'

const header = {
    method: 'GET',
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_MOVIEDB_ACCESS_TOKEN}`,
    },
}

export const getMovieData = async (url: string, page?: number) => {
    const response = page
        ? await axios.get(
              `${process.env.REACT_APP_BASE_URL}${url}?language=${process.env.REACT_APP_LANGUAGE}&page=${page}`,
              header
          )
        : await axios.get(
              `${process.env.REACT_APP_BASE_URL}${url}?language=${process.env.REACT_APP_LANGUAGE}`,
              header
          )

    return response.data
}

// export const getTopRated = async () => {
//     const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/movie/top_rated?language=en-US&page=1`, header)
//     return response.data
// }

// export const getUpcoming = async () => {
//     const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/movie/upcoming?language=en-US&page=1`, header)
//     return response.data
// }

// export const getSearch = async () => {
//     const response = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}/search/movie?query=james%20bond&include_adult=false&language=en-US&page=1`,
//         header
//     )
//     return response.data
// }

// export const getGenre = async () => {
//     const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/genre/movie/list?language=en-US`, header)
//     return response.data
// }

// export const getMovieById = async () => {
//     const response = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}/movie/100?language=en-US`,
//         header
//     )
//     return response.data
// }

export const getCredits = async () => {
    const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/movie/100/credits?language=en-US`,
        header
    )
    return response.data
}

export const getVideos = async () => {
    const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/movie/100/videos?language=en-US`,
        header
    )
    return response.data
}
