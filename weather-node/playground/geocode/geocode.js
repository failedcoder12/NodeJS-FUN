const request = require('request');

var geocodeAddress = (address,callback) => {
  var encodedAddress = encodeURIComponent(address);

  request ({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  }, (error,response,body) => {
    if(error){
      callback('Unable to Connect to Google Servers.');
    }else if(body.status === 'OVER_QUERY_LIMIT') {
      callback('Unable to find that address.');
    }else if(body.status === 'OK'){
      callback(undefined , {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      })
    //   console.log(`Address: ${body.results[0].formatted_address}`);
    //   console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    //   console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
     }
    // console.log(JSON.stringify(error, undefined, 2));
  });

};

module.exports.geocodeAddress = geocodeAddress;
