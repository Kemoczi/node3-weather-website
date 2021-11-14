const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address +'.json?access_token=pk.eyJ1Ijoia2Vtb2N6aSIsImEiOiJja3Q0ZXp5NXEweGdqMm5yMTVrY3FjcDJ5In0.X-x1FLrVBwuFFAgJSo5ibg&limit=1'

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Coś się zesrało, spróbuj nie używać polskich znaków', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode