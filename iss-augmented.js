 Number.prototype.toRadians = function() {
     return this * Math.PI / 180;
 }

 function distBetweenTwoPoints(lat1, lon1, lat2, lon2) {
     var R = 6371000; // metres
     var φ1 = lat1.toRadians();
     var φ2 = lat2.toRadians();
     var Δφ = (lat2 - lat1).toRadians();
     var Δλ = (lon2 - lon1).toRadians();

     var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
         Math.cos(φ1) * Math.cos(φ2) *
         Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
     var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
     var d = R * c;
     return d;
 }

 var util = require('util');
 var prompt = require("prompt");
 var request = require("request");

 prompt.start();

 var geoloc = "https://maps.googleapis.com/maps/api/geocode/json?address=";
 prompt.get(["What is your location?"], function(err, loc) {
     request(geoloc + loc["What is your location?"], function(err, result) {
         var resultObj = JSON.parse(result.body);
         //console.log(util.inspect(resultObj, { showHidden: false, depth: 10, colors: true }));
         var userLat = resultObj.results[0].geometry.location.lat;
         var userLong = resultObj.results[0].geometry.location.lng;

         request("http://api.open-notify.org/iss-now.json", function(err, res) {

             var result = JSON.parse(res.body);
             var issLat = result.iss_position.latitude;
             var issLong = result.iss_position.longitude;

             console.log("The distance between you and the International Space Station is " + (distBetweenTwoPoints(userLat, userLong, issLat, issLong)/1000).toFixed(2) + " km");
         });
     });
 });