import React from 'react'

type Props = {
    iconName:string,
    temperature:number
    date:string,
    day:string
}

const ForecastLine = (props: Props) => {
    const {iconName, temperature, date, day} = props
  return (
    <li className="card-item" data-testid="forecast-line">
    <div className="icon-wrapper">
        <img
            src={`./assets/images/weather_icons/${iconName}.png`}
            alt="Overcast Clouds"
            className="weather-icon"
            width="36"
            height="36"
        />
        <span className="span">
            <p className="title-2">{`${temperature}`}<sup>o</sup>C</p>
        </span>
    </div>
    <p className="label-1">{date}</p>
    <p className="label-1">{day}</p>
</li>
  )
}

export default ForecastLine