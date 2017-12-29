const request = require('request');

var getWeather = (lat, log, callback) => {
  request({
    url :`https://api.darksky.net/forecast/b55e28613cf45e9bbb86fbff6467dfd5/${lat},${log}`,
    json: true
  },(error, response, body) => {
    if(error){
      callback('Unable to connect to Forecast.io server.');
    }else if(response.statusCode === 400) {
      callback('Unable to fetch weather.');
    }else if(response.statusCode === 200){
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
}

module.exports.getWeather = getWeather;
