const apiHandler = new MoviesApiHandler()
document.querySelector('#search').oninput = e => {
    e.preventDefault()
    const movieName = document.querySelector('#search').value
    apiHandler
        .getOneMovie(movieName)
        .then(response => {
            //limpiar el select
            let options = document.querySelectorAll('#select_movie option')
            options.forEach(opt => opt.parentNode.removeChild(opt))
            //recorrer movies
            for (let i = 0; i < 5; i++) {
                //crear options y su text
                const create = document.createElement('option')
                const text = document.createTextNode(response.data.results[i].title)
                const poster = response.data.results[i].poster_path
                const inputTitle2 = document.getElementById('imageUrl')
                inputTitle2.value = response.data.results[i].poster_path
                if (i === 0) {
                    create.setAttribute("selected", true)
                }
                create.appendChild(text)
                document.querySelector('select').appendChild(create)
            }

            const select = document.querySelector('#select_movie')
            const inputTitle = document.getElementById('title')
            inputTitle.value = select.value
        })

        .catch(err => console.log(err))
}

document.querySelector('#select_movie').onclick = e => {
    const select = document.querySelector('#select_movie')
    const inputTitle = document.getElementById('title')
    inputTitle.value = select.value

    apiHandler.getOneMovie(inputTitle.value).then(response => {
        const selectPoster = response.data.results[0].poster_path
        const inputPoster = document.getElementById('imageUrl')
        inputPoster.value = selectPoster
    })
}