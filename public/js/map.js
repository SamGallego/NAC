
console.log('mapa')
// Initialize and add the map
function initMap() {
    // The location of Uluru
    // 28.093491, -14.279944
    const uluru = { lat: 28.093491, lng: -14.279944 }
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,

        center: uluru,
    })
    // The marker, positioned at Uluru
    const contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
        '<div id="bodyContent">' +
        "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
        "sandstone rock formation in the southern part of the "

    const infowindow = new google.maps.InfoWindow({
        content: contentString,
    })

    const marker = new google.maps.Marker({
        // position: uluru,
        // map: map,
        // title: 'uwu'
    })


    marker.addListener("click", () => {
        infowindow.open({
            anchor: marker,
            map,
            shouldFocus: false,
        })
    })

    function addMarker(location) {
        const marker = new google.maps.Marker({
            position: location,
            map: map,
        });
        // markers.push(marker);
    }



    map.addListener("click", (event) => {
        addMarker(event.latLng);
        console.log('aaaaaaaaaaaaa', event.latLng.lat());
        console.log('aaaaaaaaaaaaa', event.latLng.lng());
        console.log(`lat: ${event.latLng.lat()} lng: ${event.latLng.lng()} `)

        // document.getElementById('lat') //obj, ref al DOM
        // document.getElementById('lat').value = "" //no hace ref

        const inputLat = document.getElementById('lat')
        inputLat.value = event.latLng.lat()

        const inputLng = document.getElementById('lng')
        inputLng.value = event.latLng.lng()
    });








}


