export const urls = {
	currentWeather: (lat: string, lon: string) =>
		`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=dd03db6b19872c7cb9d5af234821dd03`,
    fiveDayForecast: (lat:string, lon:string) =>
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=dd03db6b19872c7cb9d5af234821dd03`,
    airQuality:(lat:string, lon:string)=>
        `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=dd03db6b19872c7cb9d5af234821dd03&units=metric`

};


