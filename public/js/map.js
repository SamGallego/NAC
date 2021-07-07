let map, marker
function initMap() {
    const uluru = { lat: 28.093491, lng: -14.279944 }

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
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