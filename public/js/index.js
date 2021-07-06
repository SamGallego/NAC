const apiHandler = new MoviesApiHandler()




document.querySelector('#search').oninput = e => {
    // document.querySelector('#search-button').onclick = e => {

    console.log("<======")
    console.log("algaosda")
    e.preventDefault()

    const movieName = document.querySelector('#search').value
    // movieName = movieName.value
    console.log(movieName)

    apiHandler
        .getOneMovie(movieName)
        .then(response => {
            console.log('===========z', response)
            console.log(response.data.results[0].title)
            console.log(response.data.results)
            // fillMovieEditForm(response.data)
            // document.querySelector('#search').reset()

            // const secondParagraph = document.querySelectorAll('option')
            // document.querySelector('section').removeChild(secondParagraph)



            for (let i = 0; i < 1; i++) {
                const create = document.createElement('option')
                const text = document.createTextNode(response.data.results[i].title)
                if (response.data.results.length === 5) {
                    response.data.results.shift()
                    console.log('help teo')
                }
                create.appendChild(text)
                document.querySelector('select').appendChild(create)
            }
        })
        .catch(err => console.log(err))
}