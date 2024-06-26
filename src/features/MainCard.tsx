import SunriseSunset from '../components/sunriseSunset'
import HiglightCard from '../components/higlightCard'
import AirQualityMetric from '../components/airQualityPanel'
import MainSkeletonCard from '../components/mainSkeletonContainer'
import { AirQuality, Currentweather } from '../utils/definitions'
import { getTime } from '../utils/dateUtils'

type Props = {
    airQuality:AirQuality
    currentWeather:Currentweather,
    higlight: string;
    sun: string;
    humidity: string;
    pressure: string;
    visibility: string;
    feel: string;
}

const MainCard = (props: Props) => {
    const {airQuality, currentWeather, higlight, sun, humidity, pressure, visibility, feel} = props
    if(airQuality && currentWeather){
        return (
            <section className="section highlights" aria-labelledby="highlights-label" >
            <div className="card card-lg">
                <h2 className="title-2">{higlight}</h2>
                <div className="highlights-list">
        
                    <AirQualityMetric airQuality={airQuality}/>
                    <div className="card card-sm highlight-card two">
                        <h3 className="title-3"> {sun} </h3>
                        <div className="card-list">
                            <SunriseSunset iconName='clear_day' dayTime='Sunrise' time={`${getTime(currentWeather?.sys?.sunrise, currentWeather?.timezone)}`}/>
                            <SunriseSunset iconName='clear_night' dayTime='Sunset' time={`${getTime(currentWeather?.sys?.sunset, currentWeather?.timezone)}`}/>
                        </div>
                    </div>
        
                    <HiglightCard title={humidity} iconName='humidity_percentage' figure={String(currentWeather?.main?.humidity)} subscript='%'/>
                    <HiglightCard title={pressure} iconName='airwave' figure={String(currentWeather?.main?.pressure)} subscript='hpa'/>
                    <HiglightCard title={visibility} iconName='visibility' figure={String(currentWeather?.visibility /10000)} subscript='km'/>
                    <HiglightCard title={feel} iconName='thermostat' figure={String(currentWeather?.main?.feels_like)} subscript='c'/>
                </div>
            </div>
        </section>
          )
    }else{
        return <MainSkeletonCard />
    }

}

export default MainCard