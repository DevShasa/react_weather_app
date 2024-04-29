import React from 'react'
import ForecastLine from '../components/forecastLine'
import LoadingSkeletonCard from '../components/loadingSkeletonCard'
import { Forecast } from '../utils/definitions'
import { monthNames, weekDayNames } from '../utils/dateUtils'

type Props = {
  forecast:Forecast | null,
  title:string
}

const ForecastCard = (props: Props) => {
  const {forecast, title} = props
  





  if(forecast){
    const predict = forecast.list
    const forecasts  = []
    for (let i = 7, len = predict.length; i < len; i += 8) {
      forecasts.push(predict[i])
    }
    return (
        <section className="section forecast" aria-labelledby="forecast" >
          <h2 className="title2" id="forecast-label">
              {title}
          </h2>
          <div className="card card-lg forecast-card">
              <ul>
                {forecasts && forecasts.map((item, index)=>{
                  const {weather, dt_txt, main:{temp_max}} = item
                  const date = new Date(dt_txt)
                  
                  return <ForecastLine 
                    temperature={Math.floor(temp_max- 273.15)} // convert kelvin to celcius
                    iconName={weather[0]?.icon}
                    date={`${date.getDate()} ${monthNames[date.getUTCMonth()]}`}
                    day={`${weekDayNames[date.getUTCDay()]}`}
                  />
                })}

              </ul>
          </div>
        </section>
    )
  }else{
    return <LoadingSkeletonCard />
  }

}

export default ForecastCard