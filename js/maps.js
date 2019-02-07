
function initMap() {

  var styledMapType = new google.maps.StyledMapType(
    [
      {
        "stylers": [
          {
            "color": "#fdf42b"
          }
        ]
      },
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ebe3cd"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#523735"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f1e6"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#c9b2a6"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#dcd2be"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#ae9e90"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "poi",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#93817c"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#a5b076"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#447530"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f1e6"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#fdfcf8"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f8c967"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#e9bc62"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e98d58"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#db8555"
          }
        ]
      },
      {
        "featureType": "road.local",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#806b63"
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#8f7d77"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#ebe3cd"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#b9d3c2"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#92998d"
          }
        ]
      }
    ],

              {name: 'Styled Map'});
var toroBravo = {
  info: '<strong>Toro Bravo</strong><br>\r\
  120 NE Russell St, Portland, OR 97212<br>\
  <a href="http://www.torobravopdx.com">www.torobravopdx.com</a>',
  lat: 45.540780,
  long: -122.663670
};


var tinShed = {
  info: '<strong>Tin Shed</strong><br>\r\
  1438 NE Alberta St Portland, OR<br>\
  <a href="http://tinshedgardencafe.com">tinshedgardencafe.com</a>',
  lat: 45.558950,
  long: -122.650980
}
var tastyNAlder = {
  info: '<strong>Tastyn Alder</strong></br>\r\
  580 SW 12th Ave, Portland, OR 97205<br>\
  <a href="https://www.tastynalder.com/">Tasty n Alder</a>',
  lat: 45.517900,
  long: -122.685580
}

var tapalaya = {
  info: '<strong>Tapalaya</strong></br>\r\
  28 NE 28th Ave Portland, OR<br>\
  <a href="http://www.tapalaya.com/">tapalaya.com</a>',
  lat: 45.522930,
  long: -122.654690
}

var stJack = {
  info: '<strong>St. Jack</strong></br>\r\
  1610 NW 23rd Ave, Portland, OR 97210<br>\
  <a href="http://www.stjackpdx.com/">stjackpdx.com</a>',
  lat: 45.531930,
  long: -122.698690
}

var shalom = {
  info: '<strong>Shalom</strong><br>\r\
  117 SE Taylor St #101, Portland, OR 97214<br>\
  <a href="https://www.shalomyallpdx.com/shalom-yall-restaurant-east-lunch/">shalomyallpdx.com</a>',
  lat: 45.515110,
  long: -122.664820
}

var screenDoor = {
  info: '<strong>Screen Door</strong></br>\r\
  2337 E Burnside St Portland, OR</br>\
  <a href="http://screendoorrestaurant.com">screendoorrestaurant.com</a>',
  lat: 45.523100,
  long: -122.641650
}

var piattino = {
  info: '<strong>Piattino</strong></br>\r\
  1140 NW Everett St, Portland, OR 97209<br>\
  <a href="https://www.piattinopdx.com/">piattinopdx.com</a>',
  lat: 45.524870,
  long: -122.682700
}

var parkKitchen = {
  info: '<strong>Park Kitchen</strong></br>\r\
  422 NW 8th Ave, Portland, OR 97209<br>\
  <a href="http://www.parkkitchen.com/">parkkitchen.com</a>',
  lat: 45.526310,
  long: -122.678260
}

var olympia = {
  info: '<strong>Olympia Provisions</strong></br>\r\
  107 SE Washington St Portland, OR 97214<br>\
<a href="https://www.olympiaprovisions.com/">olympiaprovisions.com<a>',
  lat: 45.519030,
  long: -122.664280
}

var lucca = {
  info: '<strong>Lucca</strong></br>\r\
  3449 NE 24th Ave Portland, OR<br>\
  <a href="https://www.luccapdx.com/">luccapdx.com</a>',
  lat: 45.547990,
  long: -122.641390
}

var lePigeon = {
  info: '<strong>Le Pigeon</strong></br>\r\
  738 E Burnside St, Portland, OR 97214<br>\
  <a href="https://lepigeon.com/">lepigeon.com</a>',
  lat: 45.522790,
  long: -122.657970
}
var kachka = {
  info: '<strong>Kachka</strong></br>\r\
  960 SE 11th Ave, Portland, OR 97214<br>\
  <a href="https://kachkapdx.com">kachkapdx.com</a>',
  lat: 45.517930,
  long: -122.654660
}
var imperial = {
  info: '<strong>Imperial</strong></br>\r\
  410 SW Broadway, Portland, OR 97205<br>\
  <a href="http://www.imperialpdx.com/">imperialpdx.com</a>',
  lat: 45.521060,
  long: -122.678320
}
var departure = {
  info: '<strong>Departure</strong></br>\r\
  525 SW Morrison St, Portland, OR 97204<br>\
  <a href="https://departureportland.com/">departureportland.com</a>',
  lat: 45.519329,
  long: -122.677887
}
var darsalam = {
  info: '<strong>Darsalam</strong></br>\r\
  320 SW Alder St, Portland, OR 97204<br>\
  <a href="http://downtown.darsalamportland.com/">downtown.darsalamportland.com</a>',
  lat: 45.518420,
  long: -122.672211
}
var andina = {
  info: '<strong>Andima</strong></br>\r\
  1314 NW Glisan St, Portland, OR 97209<br>\
  <a href="http://www.andinarestaurant.com/">andinarestaurant.com</a>',
  lat: 45.526340,
  long: -122.684590
}







	var locations = [
      [toroBravo.info, toroBravo.lat, toroBravo.long, 0],
      [tinShed.info, tinShed.lat, tinShed.long, 1],
      [tastyNAlder.info, tastyNAlder.lat, tastyNAlder.long, 2],
      [tapalaya.info, tapalaya.lat, tapalaya.long, 3],
      [stJack.info, stJack.lat, stJack.long, 4],
      [shalom.info, shalom.lat, shalom.long, 5],
      [screenDoor.info, screenDoor.lat, screenDoor.long, 6],
      [piattino.info, piattino.lat, piattino.long, 7],
      [parkKitchen.info, parkKitchen.lat, parkKitchen.long, 8],
      [olympia.info, olympia.lat, olympia.long, 9],
      [lucca.info, lucca.lat, lucca.long, 10],
      [lePigeon.info, lePigeon.lat, lePigeon.long, 11],
      [kachka.info, kachka.lat, kachka.long, 12],
      [imperial.info, imperial.lat, imperial.long, 13],
      [departure.info, departure.lat, departure.long, 14],
      [darsalam.info, darsalam.lat, darsalam.long, 15],
      [andina.info, andina.lat, andina.long, 16]


    ];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 13,
		center: new google.maps.LatLng(45.5382, -122.6687),
    mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
          }
	});
  map.mapTypes.set('styled_map', styledMapType);
      map.setMapTypeId('styled_map');

	var infowindow = new google.maps.InfoWindow({});

	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map
		});
		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
}
