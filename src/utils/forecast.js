const request = require('request')

const forecast = (lat, lon, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=db5227c12ee0a558491f014c086747cd&query=' + lat + ',' + lon +'&units=m'

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Error! Unable to find location.', undefined)
        } else {
            callback(undefined,
                body.current.weather_descriptions[0] + '.'
                + " It's currently " + body.current.temperature
                + " degrees out. It feels like "
                + body.current.feelslike + " degrees out. The humidity is "
                + body.current.humidity + "%."
            )
        }
    })
}

module.exports = forecast