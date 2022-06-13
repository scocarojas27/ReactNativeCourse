import axios from "axios";

const moviesDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '575c2f655f7ec6580c084008e9b5a247',
        language: 'es-ES'
    }
})

export default moviesDB