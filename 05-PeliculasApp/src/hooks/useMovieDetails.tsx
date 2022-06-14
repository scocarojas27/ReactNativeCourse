import { useState, useEffect } from 'react';
import moviesDB from "../api/moviesDB";
import { FullMovie } from "../interfaces/movieInterface";
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';

interface MovieDetails {
    isLoading: boolean;
    fullMovie?: FullMovie;
    cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {

    const [movieDetails, setMovieDetails] = useState<MovieDetails>({
        isLoading: true,
        fullMovie: undefined,
        cast: []
    })

    const getMovieDetails = async () => {

        const detailsPromise = moviesDB.get<FullMovie>(`/${movieId}`)
        const castPromise = moviesDB.get<CreditsResponse>(`/${movieId}/credits`)

        const [detailsResp, castResp] = await Promise.all([
            detailsPromise,
            castPromise
        ])

        setMovieDetails({
            isLoading: false,
            fullMovie: detailsResp.data,
            cast: castResp.data.cast
        })
    }

    useEffect(() => {
        getMovieDetails()
    }, [])

    return {
        ...movieDetails
    }
}
