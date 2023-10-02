import React from 'react'
import { CarouseMoviesProps } from '../CarouseMovies/CarouseMovies.types'
import { GridMoviesProps } from '../GridMovies/GridMovies.types'
import { GenreProps } from '../MovieCard/Genre/Genre.types'
import { MovieCreditsProps } from '../MovieCredits/MovieCredits.types'
import { MovieDetailsProps } from '../MovieDetails/MovieDetails.types'
import { MovieVideoProps } from '../MovieVideo/MovieVideo.types'

export type WrappedComponentProps = GenreProps &
    CarouseMoviesProps &
    GridMoviesProps &
    MovieDetailsProps &
    MovieCreditsProps &
    MovieVideoProps
