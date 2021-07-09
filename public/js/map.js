let map, marker
function initMap() {
    const uluru = { lat: 40.289141, lng: -1.895059 }


    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: uluru,
    })

    function addMarker(location) {
        if (marker) marker.setMap(null)

        marker = new google.maps.Marker({
            position: location,
            map: map,
        });
    }

    map.addListener("click", (event) => {
        addMarker(event.latLng);
        const inputLat = document.getElementById('lat')
        inputLat.value = event.latLng.lat()

        const inputLng = document.getElementById('lng')
        inputLng.value = event.latLng.lng()
    });
}