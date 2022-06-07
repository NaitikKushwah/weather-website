const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=d2db9e4a5342ccb2b9747532df5441d2&query=${latitude},${longitude}`;
    request({ url, json : true}, (error, { body }) => {

    if(error){
        callback('Unable to connect to weather application', undefined);
    }else if(body.error){
        callback('Unable to find location, please enter again', undefined);
    }else{
        const temperature = body.current.temperature;
        const feelslike = body.current.feelslike;
        const humidity = body.current.humidity;
        const precip = body .current.precip;

        callback(undefined,`It is currently ${temperature}, It feels like ${feelslike} degrees out. There is ${precip}% of chance of rain. The humidity is ${humidity}%`);
        } 
    });
}
module.exports = forecast;

