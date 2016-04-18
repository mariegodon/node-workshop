var request = require("request");

request("http://api.open-notify.org/iss-now.json", function(err, res){

    var result = JSON.parse(res.body);
    console.log("The latitude of the International Space Station is: " + result.iss_position.latitude.toFixed(2));
    console.log("The longitude of the International Space Station is: " + result.iss_position.longitude.toFixed(2));
    
});