

console.log("working");
//create the map object with a center and zoom level
let map = L.map('mapid').setView([40.7, -94.5], 4);

//create tile layer that will be background of the map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY,
    id: "mapbox/streets-v11"
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

