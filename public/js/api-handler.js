class MoviesApiHandler {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: 'https://api.themoviedb.org/3'
        })
    }



    getFullList = () => this.axiosApp.get('/movies')
    getOneMovie = id => this.axiosApp.get(`/movies/${id}`)



}