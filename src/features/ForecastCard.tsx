import React from 'react'
import ForecastLine from '../components/forecastLine'

type Props = {}

const ForecastCard = (props: Props) => {
  return (
    <section className="section forecast" aria-labelledby="forecast" >
    <h2 className="title2" id="forecast-label">
        5 Days Forecast
    </h2>
    <div className="card card-lg forecast-card">
        <ul>
            <ForecastLine />
            <ForecastLine />
            <ForecastLine />
            <ForecastLine />
            <ForecastLine />
        </ul>
    </div>
</section>
  )
}

export default ForecastCard