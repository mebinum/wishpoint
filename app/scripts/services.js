'use strict';
angular.module('WishpointApp.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [{
    id: 0,
    name: 'Scruff McGruff'
  }, {
    id: 1,
    name: 'G.I. Joe'
  }, {
    id: 2,
    name: 'Miss Frizzle'
  }, {
    id: 3,
    name: 'Ash Ketchum'
  }];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  };
}).factory('BlueCats', ['$rootScope',
  function($rootScope) {
    //Update with the api token for your app from https://app.bluecats.com
    var blueCatsAppToken = '14635b84-f008-42b3-9370-c1c11b41c374';
    var beaconsObjs = {};
    var feedId = 1934;
    var wells = [{
      'id': '1223',
      'name': 'Southbank Footbridge',
      'description': '',
      'imageUrl': 'images/well/southbank.jpg',
      'location': {
        'lat': -37.819557,
        'lng': 144.965148
      },
      'charity': {
        'id': -37.819557,
        'name': 144.965148,
        'imgUrl': 'images/charity/concern.jpg'
      },
      'totalRaised': 1300.00,
      'wishCount': 50,
      'likeCount': 13,
      'feed': [{
        'id': 1233,
        'uId': 1245533,
        'userName': 'Jess',
        'userImageUrl': 'images/user/christopher.jpg',
        'title': 'The place where I fell in love',
        'text': 'We visited Australia for the first time from the US, so my husband and I wanted to leave a piece of ourselves here to encourage us to return.',
        'imageUrl': 'images/feed/southbank/umbrella.jpg'
      },{
        'id': 1233,
        'uId': 1245533,
        'userName': 'Alex',
        'userImageUrl': 'images/user/christopher.jpg',
        'title': 'The place where I fell in love',
        'text': 'While dining at The Meat and Wine Co, I discovered Wishpoint. After such a great meal, it inspired me to donate to ____ to help out hungry families.',
        'imageUrl': 'images/feed/southbank/dining.jpg'
      },{
        'id': 1233,
        'uId': 1245533,
        'userName': 'Maddy',
        'userImageUrl': 'images/user/christopher.jpg',
        'title': 'The place where I fell in love',
        'text': 'Reminds me of Vegas! Wish I could go back soon!',
        'imageUrl': 'images/feed/southbank/flames.jpg'
      },{
        'id': 1233,
        'uId': 1245533,
        'userName': 'Anne',
        'userImageUrl': 'images/user/christopher.jpg',
        'title': 'The place where I fell in love',
        'text': 'Such an amazing sunset in Melbourne! I wish every night could be this beautiful!',
        'imageUrl': 'images/feed/southbank/sunset.jpg'
      }]
    }, {
      'id': '123',
      'name': 'Federation Square Arena',
      'description': '',
      'imageUrl': 'images/well/FedSquare.jpg',
      'location': {
        'lat': -37.815531,
        'lng': 144.966927
      },
      'totalRaised': 1700.00,
      'wishCount': 11,
      'likeCount': 45,
      'feed': [{
        'id': 1233,
        'uId': 1245533,
        'userName': 'Rachel',
        'userImageUrl': 'images/user/christopher.jpg',
        'title': 'The place where I fell in love',
        'text': 'I wish all cities could be like this!',
        'imageUrl': 'images/feed/fedsquare/plant.jpg'
      },{
        'id': 1233,
        'uId': 1245533,
        'userName': 'Jim',
        'userImageUrl': 'images/user/christopher.jpg',
        'title': 'The place where I fell in love',
        'text': 'So awesome to seed my Dads classic Ford on display, hes been come since the beginning. My wish is for this event to keep going!',
        'imageUrl': 'images/feed/fedsquare/cars.jpg'
      },{
        'id': 1233,
        'uId': 1245533,
        'userName': 'Sarah',
        'userImageUrl': 'images/user/christopher.jpg',
        'title': 'The place where I fell in love',
        'text': 'Melbourne art is so inspiring - I wish some day to have my own piece on display here',
        'imageUrl': 'images/feed/fedsquare/green.jpg'
      },{
        'id': 1233,
        'uId': 1245533,
        'userName': 'Anne',
        'userImageUrl': 'images/user/christopher.jpg',
        'title': 'The place where I fell in love',
        'text': 'I wish for peace and calm in the mind - something that tai chi can bring. Also happy to help out Concern Aus',
        'imageUrl': 'images/feed/fedsquare/taichi.jpg'
      },{
        'id': 1233,
        'uId': 1245533,
        'userName': 'Jonno',
        'userImageUrl': 'images/user/christopher.jpg',
        'title': 'The place where I fell in love',
        'text': 'Loving the tennis at Fed Square, my wish is for more summer nights like this!',
        'imageUrl': 'images/feed/fedsquare/tennis.jpg'
      }]
    }, {
      'id': '1323',
      'name': 'Collins Street Wishing Wall',
      'imageUrl': 'images/well/collinsStreet.jpg',
      'description': '',
      'location': {
        'lat': -37.818358,
        'lng': 144.96876
      },
      'totalRaised': 8900.00,
      'wishCount': 89,
      'likeCount': 145,
      'feed': [{
        'id': 1233,
        'uId': 1245533,
        'userName': 'Justin',
        'userImageUrl': 'images/user/christopher.jpg',
        'title': 'The place where I fell in love',
        'text': 'i wish for cheese. It came true',
        'imageUrl': 'images/feed/queenvic/cheese.jpg'
      },{
        'id': 1233,
        'uId': 1245533,
        'userName': 'Kelly',
        'userImageUrl': 'images/user/christopher.jpg',
        'title': 'The place where I fell in love',
        'text': 'The food options here are amazing so are Care Aus',
        'imageUrl': 'images/feed/queenvic/food.jpg'
      },{
        'id': 1233,
        'uId': 1245533,
        'userName': 'Nicola',
        'userImageUrl': 'images/user/christopher.jpg',
        'title': 'The place where I fell in love',
        'text': 'ots of people - Night Market is super busy, so much nice food',
        'imageUrl': 'images/feed/queenvic/market.jpg'
      },{
        'id': 1233,
        'uId': 1245533,
        'userName': 'Jerry',
        'userImageUrl': 'images/user/christopher.jpg',
        'title': 'The place where I fell in love',
        'text': 'I wish for a good trading day and got one! Donated 10% of earnings to Oxfam',
        'imageUrl': 'images/feed/queenvic/store-owner.jpg'
      },{
        'id': 1233,
        'uId': 1245533,
        'userName': 'Jonno',
        'userImageUrl': 'images/user/christopher.jpg',
        'title': 'The place where I fell in love',
        'text': 'Loving the tennis at Fed Square, my wish is for more summer nights like this!',
        'imageUrl': 'images/feed/fedsquare/tennis.jpg'
      }]
    }, {
      'id': '1234',
      'name': 'SouthGate Statue',
      'imageUrl': 'images/well/southgate.jpg',
      'description': '',
      'location': {
        'lat': -37.819877,
        'lng': 144.966055
      },
      'totalRaised': 7803.00,
      'wishCount': 123,
      'likeCount': 563,
      'feed': []
    }, {
      'id': '12634',
      'name': 'Queen Victoria Market',
      'description': 'images/well/queenvic.jpg',
      'imageUrl': '',
      'location': {
        'lat': -37.807520,
        'lng': 144.958179
      },
      'totalRaised': 4590.00,
      'wishCount': 33,
      'likeCount': 45,
      'feed': []
    }, {
      'id': '12634',
      'name': 'Fitzroy Gardens Pavillion',
      'description': '',
      'imageUrl': '',
      'location': {
        'lat': -37.813181,
        'lng': 144.981296
      },
      'totalRaised': 8932.00,
      'wishCount': 11,
      'likeCount': 28,
      'feed': []
    }];
    var app = {
      // deviceready Event Handler
      //
      // The scope of 'this' is the event. In order to call the 'receivedEvent'
      // function, we must explicity call 'app.receivedEvent(...);'
      onDeviceReady: function() {
        app.receivedEvent('received');
        app.watchBeacons();
      },
      // Update DOM on a Received Event
      receivedEvent: function(event) {
        if (event === 'apptokenrequired') {
          //broadcast
          $rootScope.$broadcast('bc_apptokenrequired', {
            msg: 'App token not set'
          });
        } else if (event === 'bluecatspurring') {
          $rootScope.$broadcast('bc_bluecatspurring', {
            msg: 'Looking for beacons'
          });
        }

        var msg = 'Received Event: ' + event;
        console.log(msg);

        $rootScope.$broadcast('bc_receivedevent', {
          event: event,
          msg: msg
        });
      },
      watchBeacons: function() {
        var watchIdForEnterBeacon, watchIdForExitBeacon, watchIdForClosestBeacon = null;

        if (blueCatsAppToken === 'BLUECATS-APP-TOKEN') {
          //BlueCats app token hasn't been configured
          app.receivedEvent('apptokenrequired');
          return;
        }
        var beaconWatchOptions = {
          filter: {
            //Configure additional filters here e.g.
            //sitesName:['BlueCats HQ', 'Another Site'],
            //categoriesNamed:['Entrance'],
            //maximumAccuracy:0.5
            //etc.
          }
        };
        var displayBeacons = function(description, watchData) {
          var beacons = watchData.filteredMicroLocation.beacons;
          var beaconNames = [];
          for (var i = 0; i < beacons.length; i++) {
            beaconNames.push(beacons[i].name);
          }

          angular.copy(beacons, beaconsObjs);

          var displayText = description + ' ' + beacons.length + ' beacons: ' + beaconNames.join(',');
          console.log(displayText);

          var logError = function() {
            console.log('Error occurred watching beacons');
            $rootScope.$broadcast('bc_error', {
              msg: 'Error occurred watching beacons'
            });
          };

          var watchBeaconEntryAndExit = function() {
            if (watchIdForEnterBeacon !== null) {
              com.bluecats.beacons.clearWatch(watchIdForEnterBeacon);
            }

            if (watchIdForExitBeacon !== null) {
              com.bluecats.beacons.clearWatch(watchIdForExitBeacon);
            }

            watchIdForEnterBeacon = com.bluecats.beacons.watchEnterBeacon(
              function(watchData) {
                $rootScope.$broadcast('bc_entered', {
                  msg: 'found new beacon'
                });
                displayBeacons('Entered', watchData);
              }, logError, beaconWatchOptions);
            watchIdForExitBeacon = com.bluecats.beacons.watchExitBeacon(
              function(watchData) {
                displayBeacons('Exited', watchData);
                $rootScope.$broadcast('bc_left', {
                  msg: 'left beacon proximity'
                });
              }, logError, beaconWatchOptions);
          };

          var watchClosestBeacon = function() {
            if (watchIdForClosestBeacon !== null) {
              com.bluecats.beacons.clearWatch(watchIdForClosestBeacon);
            }

            watchIdForClosestBeacon = com.bluecats.beacons.watchClosestBeaconChange(
              function(watchData) {
                displayBeacons('Closest to', watchData);
                $rootScope.$broadcast('bc_close', {
                  msg: 'new beacon close by'
                });
              }, logError, beaconWatchOptions);
          };

          var purringSuccess = function() {
            app.receivedEvent('bluecatspurring');
            watchBeaconEntryAndExit();
            watchClosestBeacon();
          };

          var sdkOptions = {
            trackBeaconVisits: true, //Log visits to beacons to the BlueCats api
            useLocalStorage: true, //Cache beacons in local db for offline availability
            cacheAllBeaconsForApp: true, //Cache all beacons on startup
            discoverBeaconsNearby: true, //Cache beacons as detected by the device
            cacheRefreshTimeIntervalInSeconds: 300 //Period to check for changes in second
          };

          com.bluecats.beacons.startPurringWithAppToken(blueCatsAppToken, purringSuccess, logError, sdkOptions);
        };
      },
      allBeacons: function() {
        return beaconsObjs;
      },
      getBeacons: function() {
        return wells;
      },
      getWell: function(index) {
        return _.findWhere(wells, {
          'id': index
        });
      },
      addWish: function(wellId,wish) {
        var well = app.getWell(wellId);
        well.feed.push({
          'id': feedId + 1,
          'uId': 1245533,
          'userName': 'Christopher Bartlett',
          'userImageUrl': 'images/user/christopher.jpg',
          'title': wish.substring(0, 20),
          'text': wish,
          'imageUrl': 'images/feed/sunset.jpg'
        });
        //console.log(JSON.stringify(wells));
        return true;
      }
    };
    return app;
  }
]).service('Geolocation', ['$q', 'Data',
  function Geolocation($q, data) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var gcoder;

    if (typeof google !== 'undefined') {
      //var gmaps = window.google.maps.Load();
      gcoder = new google.maps.Geocoder();
      //TODO:limit to Australia 
      var melbourneLatLng = new google.maps.LatLng(-37.813611, 144.963056);
      //reference: original 'research', see victoria-latlon.json
      var auVicSwLatLon = new google.maps.LatLng(-39.234713, 140.962526);
      var auVicNeLatLon = new google.maps.LatLng(-33.981125, 149.975296);
      var auVicLatLonBounds = new google.maps.LatLngBounds(auVicSwLatLon, auVicNeLatLon);

      var convertToLocation = function(loc) {
        var tlat = loc.geometry.location.lat();
        var tlon = loc.geometry.location.lng();
        //if inside victorian borders add to result
        var out = {
          address: loc.formatted_address,
          coords: {
            lat: tlat,
            lng: tlon
          }
        };
        this.push(out);
      };
    }

    //This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
    //retrieved from http://stackoverflow.com/questions/18883601/function-to-calculate-distance-between-two-coordinates-shows-wrong

    function calcCrow(lat1, lon1, lat2, lon2) {
      var R = 6371; // km
      var dLat = toRad(lat2 - lat1);
      var dLon = toRad(lon2 - lon1);
      var rlat1 = toRad(lat1);
      var rlat2 = toRad(lat2);

      var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(rlat1) * Math.cos(rlat2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c;
      return d;
    }


    // Converts numeric degrees to radians

    function toRad(Value) {
      return Value * Math.PI / 180;
    }

    var currentLocation = {};
    //https://developer.mozilla.org/en/docs/WebAPI/Using_geolocation
    //var wpid = navigator.geolocation.watchPosition(geo_success, geo_error, geo_options);
    // Public API here

    var getCurrentLocation = function() {
      var dff = $q.defer();
      var geoSuccess = function(p) {
        //{coords:{latitude:theLatitude,longitude:theLongitude},timestamp:whenTheLocationWasRetrieved}
        currentLocation.coords = {};
        currentLocation.coords.lat = p.coords.latitude;
        currentLocation.coords.lng = p.coords.longitude;
        currentLocation.timestamp = p.timestamp;
        currentLocation.found = true;
        var a = [];
        a.push(currentLocation);
        data.setCurrentLocation(a);
        return dff.resolve(a);
      };

      var geoError = function() {
        currentLocation.found = false;
        dff.reject();
        // var msg = 'We could not get your current location please turn on your geolocation service in your phone settings';
        // notification.alert(msg,'Error','OK');
      };
      navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
      return dff.promise;
    };
    return {
      getCurrentLocation: getCurrentLocation,
      lookForAddress: function(searchText) {
        var dff = $q.defer();
        var parseResults = function(results, status) {
          // console.log("got some results");
          // console.log(results);
          var resultLocations = [];
          if (status === google.maps.GeocoderStatus.OK) {
            angular.forEach(results, convertToLocation, resultLocations);
            // console.log(resultLocations);
            // var results = angular.copy(resultLocations);
            return dff.resolve(resultLocations);
          }

          return dff.reject(google.maps.GeocoderStatus);
        };
        //TODO: check if there is an internet connection and gcoder is null
        gcoder.geocode({
          address: searchText,
          region: 'AU',
          bounds: auVicLatLonBounds,
          location: melbourneLatLng
        }, parseResults);

        return dff.promise;
      },
      distanceBetweenPoints: function(point1, point2) {
        return calcCrow(point1.lat, point1.lng, point2.lat, point2.lng);
      },
      distanceFromCurrentLocation: function(point) {
        var loc = data.getCurrentLocation();
        var distance = function(coords) {
          return calcCrow(point.lat, point.lng, coords.lat, coords.lng);
        };
        if (_.isUndefined(loc) || _.isEmpty(loc)) {
          return getCurrentLocation().then(function(data) {
            return distance(data[0].coords);
          });
        }
        return $q.when(distance(loc[0].coords));
      }
    };
  }
]);