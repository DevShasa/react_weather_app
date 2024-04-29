import React from 'react'
import SunriseSunset from '../components/sunriseSunset'
import HiglightCard from '../components/higlightCard'
import AirQualityMetric from '../components/airQualityPanel'

type Props = {}

const MainCard = (props: Props) => {
  return (
    <section className="section highlights" aria-labelledby="highlights-label" >
    <div className="card card-lg">
        <h2 className="title-2">Todays Higlights</h2>
        <div className="highlights-list">

            <AirQualityMetric />
            <div className="card card-sm highlight-card two">
                <h3 className="title-3"> Sunrise & Sunset </h3>
                <div className="card-list">
                    <SunriseSunset iconName='clear_day' dayTime='Sunrise' time='6:30 AM'/>
                    <SunriseSunset iconName='clear_night' dayTime='Sunset' time='5:54 PM'/>
                </div>
            </div>

            <HiglightCard title='Humidity' iconName='humidity_percentage' figure={`35`} subscript='%'/>
            <HiglightCard title='Pressure' iconName='airwave' figure={`1052`} subscript='hpa'/>
            <HiglightCard title='Visibility' iconName='visibility' figure={`10`} subscript='km'/>
            <HiglightCard title='Feels Like' iconName='thermostat' figure={`25`} subscript='c'/>
        </div>
    </div>
</section>
  )
}

export default MainCard