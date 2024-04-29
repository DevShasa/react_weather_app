import React from 'react'
import { Currentweather } from '../utils/definitions'


type Props = {
    currentWeather:Currentweather | null
}

const NowCard = (props: Props) => {
    const {currentWeather} = props

    console.log("CURRENT-->", currentWeather)
  return (
    <section
    className="section current-weather"
    aria-label="current"
>
    <div className="card card-lg current-weather-card">
        <h2 className="title-2 card-title">Now</h2>
        <div className="weapper">
            <p className="heading"> {`${currentWeather?.main.temp}`}&deg;<sup>c</sup> </p>
            <img src={`./assets/images/weather_icons/${currentWeather?.weather[0]?.icon}.png`} width="64" height="64" alt="overcast clouds" className="weather-icon" />
        </div>
        <p className="body-3">{currentWeather?.weather[0]?.description}</p>
        <ul className="meta-list">
            <li className="meta-item">
                <span className="m-icon">
                    calendar_today
                </span>
                <p className="title-3 meta-text">
                    Thursday 16, Feb
                </p>
            </li>
            <li className="meta-item">
                <span className="m-icon">
                    location_on
                </span>
                <p className="title-3 meta-text">
                    London, GB
                </p>
            </li>
        </ul>
    </div>
</section>
  )
}

export default NowCard