const apiHandler = new MoviesApiHandler()

loadMoviesFromAPI()

function loadMoviesFromAPI() {

    apiHandler
        .getAllMovies()
        .then(response => {
            // let movies = ''
            response.data.forEach(elm => console.log(elm.title))
            // document.querySelector('#moviesList').innerHTML = movies
        })
        .catch(err => console.log(err))
}