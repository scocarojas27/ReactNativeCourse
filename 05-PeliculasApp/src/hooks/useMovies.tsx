import { useEffect, useState } from "react"
import moviesDB from "../api/moviesDB"
import { MoviesDBResponse, Movie } from '../interfaces/movieInterface';

interface MoviesState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
}

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [moviesState, setMoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: []
    })

    const getMovies = async () => {
        const nowPlayingPromise = moviesDB.get<MoviesDBResponse>("/now_playing")
        const popularPromise = moviesDB.get<MoviesDBResponse>("/popular")
        const topRatedPromise = moviesDB.get<MoviesDBResponse>("/top_rated")
        const upcomingPromise = moviesDB.get<MoviesDBResponse>("/upcoming")

        const resps = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upcomingPromise
        ])

        setMoviesState({
            nowPlaying: resps[0].data.results,
            popular: resps[1].data.results,
            topRated: resps[2].data.results,
            upcoming: resps[3].data.results
        })

        setIsLoading(false)
    }

    useEffect(() => {
        getMovies()
    }, [])

    return {
        ...moviesState,
        isLoading
    }
}