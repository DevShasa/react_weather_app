import React from 'react'

type Props = {}

const ForecastLine = (props: Props) => {
  return (
    <li className="card-item">
    <div className="icon-wrapper">
        <img
            src="./assets/images/weather_icons/01n.png"
            alt="Overcast Clouds"
            className="weather-icon"
            width="36"
            height="36"
        />
        <span className="span">
            <p className="title-2">25</p>
        </span>
    </div>
    <p className="label-1">17 Feb</p>
    <p className="label-1">Friday</p>
</li>
  )
}

export default ForecastLine