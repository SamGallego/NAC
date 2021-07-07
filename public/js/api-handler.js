class MoviesApiHandler {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: 'https://api.themoviedb.org/3/search/movie?api_key=dcc60c19b0fb66ddbb9f4e41845c2603&language=en-US&query=',
            // search: '/search/movie?api_key=dcc60c19b0fb66ddbb9f4e41845c2603&language=en-US&query='
            // matrix& page=1 & include_adult=false
        })
    }
    getFullList = () => this.axiosApp.get('/movies')
    getOneMovie = name => this.axiosApp.get(`${name}`)

}