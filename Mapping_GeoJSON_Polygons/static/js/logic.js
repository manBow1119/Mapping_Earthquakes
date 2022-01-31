// console.log("working");
//create the map object with a center and zoom level
// let map = L.map('mapid').setView([36.1733, -120.1794], 7); //map coords and zoom level changed for line routes

// Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([30, 30], 2);



//create tile layer that will be background of the map
//live view didnt like this one
let streets = L.tileLayer('https://api.mapbox.com/styles/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY,
     id: "mapbox/light-v10"
});
// create tile layer that will be background of the map
let light = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY,
    id: "mapbox/light-v10"
});
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY,
    id: "mapbox/satellite-streets-v11"
})
// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy<a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// Create a base layer that holds both maps.
let baseMaps = {
    "Streets": streets,
    "Satellite": satelliteStreets
  };

  //alt map creation
// Create the map object with a center and zoom level.
let map = L.map('mapid', {
    center: [43.7, -79.3],
    zoom: 11,
    layers: [satelliteStreets]
})

//  Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Then we add our ' tile layer to the map.
light.addTo(map);

// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/manBow1119/Mapping_Earthquakes/main/torontoRoutes.json"
// Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/manBow1119/Mapping_Earthquakes/main/torontoNeighborhoods.json";//edit with personal github

// Create a style for the lines.
let myStyle = {
    color: "blue",
    weight: 1, 
    fillColor: "yellow"
}

// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data, {
      style: myStyle,
      onEachFeature: function(feature, layer) {
        layer.bindPopup("<h3>"+ feature.properties.AREA_NAME + "</h3>  ")      }
  }).addTo(map);
});



//Accessing airport GeoJSON URL
// let airportData = "https://raw.githubusercontent.com/manBow1119/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//     console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJSON(data, {
//     onEachFeature: function(feature, layer) {
//                 console.log(layer);
//               layer.bindPopup("<h2> Airport code: " + feature.properties.faa + "</h2>" + "<hr>"+ "<h3> Airport name: " + feature.properties.name + "</h3>");
//             }
//         }).addTo(map);
// });





// Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}//lat and lng are reversed for geoJSON
// ]};

// // Grabbing our GeoJSON data.--Using pointToLayer
// L.geoJSON(sanFranAirport,{
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//         console.log(feature);
//         return L.marker(latlng)
//         .bindPopup("<h2>" + feature.properties.city + ", CA"  + "</h2>");
//     }
// }).addTo(map);

// L.geoJSON(sanFranAirport, {--GEOJSON
//     onEachFeature: function(feature, layer) {
//         console.log(layer);
//       layer.bindPopup("<h2> Airport code: " + feature.properties.faa + "</h2>" + "<hr>"+ "<h3> Airport name: " + feature.properties.name + "</h3>");
//      }
// }).addTo(map);
// Coordinates for each point to be used in the line.-MAPPING LINES
// Coordinates for each point to be used in the polyline.
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790],
//     [40.7899, -111.9791],
//     [47.4502, -122.3088]
//   ];
  
// // Create a polyline using the line coordinates and make the line red._MAPPING LINES
// L.polyline(line, {
//     color: "blue",
//     opacity: 0.5,
//     dashArray: "10"
//   }).addTo(map)



  //Add a marker for Los Angeles California-SINGLE POINT
// let marker = L.circleMarker([34.0522, -118.2437], {
//     radius: 300,
//     color: "black",
//     fillColor:'#ffffa1'
// }).addTo(map);

// Get data from cities.js-MULTIPLE PONTS
//let cityData = cities;

  // Loop through the cities array and create one marker for each city.-MULTIPLE POINTS
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population/200000,
//         color: "orange",
//         lineweight: 4
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
//    });




