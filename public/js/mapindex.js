function initMap() {
    let markers = []
    const uluru = { lat: 40.289141, lng: -1.895059 }





    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: uluru,
    })

    axios.get("/api/movie").then(res => {
        res.data.forEach(elm => {

            const marker = new google.maps.Marker({
                position: { lat: elm.location.coordinates[0], lng: elm.location.coordinates[1] },
                map: map,
                title: 'uwu'
            })

            const infowindow = new google.maps.InfoWindow({

                content: `<div id="markerWindows"> <strong><a href="/event/list/${elm._id}">${elm.name}</a><strong> <hr>
                <img src="https://image.tmdb.org/t/p/w500/${elm.movie.image}" alt="${elm.movie.name}"  width="150">  
                <p>${elm.description} </p></div>`
            });

            marker.addListener("click", () => {
                infowindow.open({
                    anchor: marker,
                    map,
                    shouldFocus: false,
                });
            });
        });
    })
}