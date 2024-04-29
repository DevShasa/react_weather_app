
'use-strict';

const api_key = "dd03db6b19872c7cb9d5af234821dd03"

/**
 * Append an api key to the provided url then give data back to callback
 * @param {string} URL api url
 * @param {Function} callback callback function
 */
export const fetchData = function(URL, callback){
    fetch(`${URL}&APPID=${api_key}`)
    .then(res => res.json())
    .then(data => callback(data))
}



export const url={
    currentWeather(lat, lon) { return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric` },
    forecast(lat, lon) { return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric` },
    airPollution(lat, lon) { return `https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}` },
    reverseGeo(lat, lon) { return `https://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5` },
    /**
     * @param {string} query Search query e.g. : "London", "New York", "Tokyo"
     */
    geo(query) { return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5` }
}