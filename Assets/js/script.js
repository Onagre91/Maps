var night = [{"elementType":"geometry","stylers":[{"color":"#212121"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#212121"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#757575"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"administrative.land_parcel","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#181818"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"poi.park","elementType":"labels.text.stroke","stylers":[{"color":"#1b1b1b"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#2c2c2c"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#8a8a8a"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#373737"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#3c3c3c"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"color":"#4e4e4e"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#3d3d3d"}]}];
var infra = [{"elementType": "geometry","stylers": [{"color": "#1d2c4d"}]},{"elementType": "labels.text.fill","stylers": [{"color": "#8ec3b9"}]},{"elementType": "labels.text.stroke","stylers": [{"color": "#1a3646"}]},{"featureType": "administrative.country","elementType": "geometry.stroke","stylers": [{"color": "#4b6878"}]},{"featureType": "administrative.land_parcel","elementType": "labels.text.fill","stylers": [{"color": "#64779e"}]},{"featureType": "administrative.province","elementType": "geometry.stroke","stylers": [{"color": "#4b6878"}]},{"featureType": "landscape.man_made","elementType": "geometry.stroke","stylers": [{"color": "#334e87"}]},{"featureType": "landscape.natural","elementType": "geometry","stylers": [{"color": "#023e58"}]},{"featureType": "poi","elementType": "geometry","stylers": [{"color": "#283d6a"}]},{"featureType": "poi","elementType": "labels.text.fill","stylers": [{"color": "#6f9ba5"}]},{"featureType": "poi","elementType": "labels.text.stroke","stylers": [{"color": "#1d2c4d"}]},{"featureType": "poi.park","elementType": "geometry.fill","stylers": [{"color": "#023e58"}]},{"featureType": "poi.park","elementType": "labels.text.fill","stylers": [{"color": "#3C7680"}]},{"featureType": "road","elementType": "geometry","stylers": [{"color": "#304a7d"}]},{"featureType": "road","elementType": "labels.text.fill","stylers": [{"color": "#98a5be"}]},{"featureType": "road","elementType": "labels.text.stroke","stylers": [{"color": "#1d2c4d"}]},{"featureType": "road.highway","elementType": "geometry","stylers": [{"color": "#2c6675"}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#255763"}]},{"featureType": "road.highway","elementType": "labels.text.fill","stylers": [{"color": "#b0d5ce"}]},{"featureType": "road.highway","elementType": "labels.text.stroke","stylers": [{"color": "#023e58"}]},{"featureType": "transit","elementType": "labels.text.fill","stylers": [{"color": "#98a5be"}]},{"featureType": "transit","elementType": "labels.text.stroke","stylers": [{"color": "#1d2c4d"}]},{"featureType": "transit.line","elementType": "geometry.fill","stylers": [{"color": "#283d6a"}]},{"featureType": "transit.station","elementType": "geometry","stylers": [{"color": "#3a4762"}]},{"featureType": "water","elementType": "geometry","stylers": [{"color": "#0e1626"}]},{"featureType": "water","elementType": "labels.text.fill","stylers": [{"color": "#4e6d70"}]}]
var base = [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}];
var desert = [{"elementType": "labels","stylers": [{"visibility": "off"},{"color": "#f49f53"}]},{"featureType": "landscape","stylers": [{"color": "#f9ddc5"},{"lightness": -7}]},{"featureType": "road","stylers": [{"color": "#813033"},{"lightness": 43}]},{"featureType": "poi.business","stylers": [{"color": "#645c20"},{"lightness": 38}]},{"featureType": "water","stylers": [{"color": "#1994bf"},{"saturation": -69},{"gamma": 0.99},{"lightness": 43}]},{"featureType": "road.local","elementType": "geometry.fill","stylers": [{"color": "#f19f53"},{"weight": 1.3},{"visibility": "on"},{"lightness": 16}]},{"featureType": "poi.business"},{"featureType": "poi.park","stylers": [{"color": "#645c20"},{"lightness": 39}]},{"featureType": "poi.school","stylers": [{"color": "#a95521"},{"lightness": 35}]},{},{"featureType": "poi.medical","elementType": "geometry.fill","stylers": [{"color": "#813033"},{"lightness": 38},{"visibility": "off"}]},{},{},{},{},{},{},{},{},{},{},{},{"elementType": "labels"},{"featureType": "poi.sports_complex","stylers": [{"color": "#9e5916"},{"lightness": 32}]},{},{"featureType": "poi.government","stylers": [{"color": "#9e5916"},{"lightness": 46}]},{"featureType": "transit.station","stylers": [{"visibility": "off"}]},{"featureType": "transit.line","stylers": [{"color": "#813033"},{"lightness": 22}]},{"featureType": "transit","stylers": [{"lightness": 38}]},{"featureType": "road.local","elementType": "geometry.stroke","stylers": [{"color": "#f19f53"},{"lightness": -10}]},{},{},{}]
var calculate;
var direction;
var marker, map;
var geocoder;
var baseMap;

function initMap() {
  var panel = document.getElementById('panel');
  baseMap = new google.maps.StyledMapType(base, {name: "default"});
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: {lat: 46.622405, lng: 2.96719}
  });

  map.mapTypes.set('default', baseMap);
  map.setMapTypeId('default');
  geocoder = new google.maps.Geocoder;

  marker = new google.maps.Marker({
    map : map,
    draggable : true,
    animation: google.maps.Animation.DROP,
  });

  direction = new google.maps.DirectionsRenderer({
    map   : map, 
    panel : panel 
  });

  google.maps.event.addListener(map, 'click', function(event) {
    addMarker(event.latLng, map);
  });

  getLoc();
}

function getLoc() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      
      marker.setPosition(pos);
      map.setCenter(pos);
      geocodeLatLng(pos);
    }, function(err){
      console.log("GEO ERROR : ", err);
    }, {timeout: 10000});
  }
}

function geocodeLatLng(pos) {
  geocoder.geocode({'location': pos}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      if (results[1]) {
        if(status === false) {
          document.getElementById('destination').value = results[0].formatted_address;
        }
        else {
          document.getElementById('origin').value = results[0].formatted_address;
        }
        
      } 
    }
  });
}

function addMarker(pos, map) {
  if(marker) {
    marker.setPosition(pos);
  }
  else {
    marker = new google.maps.Marker({
      position: pos,
      draggable: false,
      animation: google.maps.Animation.DROP,
    });
  }
  geocodeLatLng(pos);
  marker.setPosition(map);
}

function calculate() {
  origin      = document.getElementById('origin').value;
  destination = document.getElementById('destination').value;
  locomo = document.getElementById('locomotion').value;
  if(origin && destination){
    if (locomo == "Driving") {
      var request = {
        origin      : origin,
        destination : destination,
        travelMode  : google.maps.DirectionsTravelMode.DRIVING
      }
    }    
    if (locomo == "Walking") {
      var request = {
        origin      : origin,
        destination : destination,
        travelMode  : google.maps.DirectionsTravelMode.WALKING 
      }
    }    
    if (locomo == "Transit") {
      var request = {
        origin      : origin,
        destination : destination,
        travelMode  : google.maps.DirectionsTravelMode.TRANSIT
      }
    }
    var directionsService = new google.maps.DirectionsService();
    directionsService.route(request, function(response, status){
      if(status == google.maps.DirectionsStatus.OK){
        direction.setDirections(response); 
      }
    });
  } 
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

$(document).ready(function () {
  $(".dropdown-button").dropdown({
    belowOrigin : true
  });

  $('select').material_select();
});

function selectno() {
  document.body.setAttribute("id", "");
  var baseMap = new google.maps.StyledMapType(base, {name: "base"});
  map.mapTypes.set('base', baseMap);
  map.setMapTypeId('base');
}

function selectnight() {
  document.body.setAttribute("id", "");
  document.body.setAttribute("id", "night");
  var nightMap = new google.maps.StyledMapType(night, {name: "night"});
  map.mapTypes.set('night', nightMap);
  map.setMapTypeId('night');
}

function selectinfra() {
  document.body.setAttribute("id", "");
  document.body.setAttribute("id", "infra");
  var infraMap = new google.maps.StyledMapType(infra, {name: "infra"});
  map.mapTypes.set('infra', infraMap);
  map.setMapTypeId('infra');
}

function selectdesert() {
  document.body.setAttribute("id", "");
  document.body.setAttribute("id", "desert");
  var desertMap = new google.maps.StyledMapType(desert, {name: "desert"});
  map.mapTypes.set('desert', desertMap);
  map.setMapTypeId('desert');
}