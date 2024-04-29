import React from 'react'

type Props = {
    iconName:string,
    dayTime:string,
    time:string
}

const SunriseSunset = (props: Props) => {
    const {iconName, dayTime, time} = props
  return (
    <div className="card-item">
    <span className="m-icon"> {iconName} </span>
    <div>
        <p className="label-1"> {dayTime} </p>
        <p className="title-1"> {time} </p>
    </div>
</div>
  )
}

export default SunriseSunset