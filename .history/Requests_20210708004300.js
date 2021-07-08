const API_KEY = process.env.MOVIE_API

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language`
}