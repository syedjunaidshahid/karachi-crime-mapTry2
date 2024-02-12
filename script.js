// script.js
require([
  'esri/Map',
  'esri/views/MapView',
  'esri/layers/GraphicsLayer',
  'esri/Graphic'
], function(Map, MapView, GraphicsLayer, Graphic) {

  var map = new Map({
    basemap: 'streets'
  });

  var view = new MapView({
    container: 'viewDiv',
    map: map,
    center: [67.0011, 24.8607], // Coordinates for Karachi, Pakistan
    zoom: 12
  });

  var graphicsLayer = new GraphicsLayer();
  map.add(graphicsLayer);

  var isReportingCrime = false; // Flag to control crime reporting mode

  function addCrimeIncident(lat, lon, date, crimeType, details) {
    var point = {
      type: 'point',
      longitude: lon,
      latitude: lat
    };

    var pointGraphic = new Graphic({
      geometry: point,
      symbol: {
        type: 'simple-marker',
        color: '#ff0000',
        size: 8
      },
      attributes: {
        crimeType: crimeType,
        date: date,
        details: details
      },
      popupTemplate: {
        title: '<b>{crimeType}</b>',
        content: 'Date: {date}<br>{details}'
      }
    });

    graphicsLayer.graphics.add(pointGraphic);

    // Add to Firebase
    db.collection('crime-incidents').add({
      latitude: lat,
      longitude: lon,
      date: date,
      crimeType: crimeType,
      details: details,
    })
    .then(function(docRef) {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch(function(error) {
      console.error('Error adding document: ', error);
    });
  }

  document.getElementById('addCrimeButton').addEventListener('click', function() {
    alert('Click on the map to report a crime incident.');
    isReportingCrime = true; // Enable reporting mode
  });

  view.on('click', function(event) {
    if (isReportingCrime) {
      event.stopPropagation();

      var date = prompt('Enter date (YYYY-MM-DD):');
      var crimeType = prompt('Enter crime type:');
      var details = prompt('Enter additional details:');

      if (date && crimeType && details) {
        addCrimeIncident(event.mapPoint.latitude, event.mapPoint.longitude, date, crimeType, details);
        isReportingCrime = false; // Reset the flag after reporting a crime
      } else {
        alert('Invalid input. Crime incident not reported.');
        isReportingCrime = false; // Also reset the flag if the user cancels
      }
    }
  });
});
