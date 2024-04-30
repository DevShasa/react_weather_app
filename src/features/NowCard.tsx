import { Currentweather } from '../utils/definitions'
import { getDate } from '../utils/dateUtils'
import LoadingSkeletonCard from '../components/loadingSkeletonCard'

type Props = {
    currentWeather:Currentweather | null
    title:string
}

const NowCard = (props: Props) => {
    const {currentWeather, title} = props

    // console.log(currentWeather)
    
    if(currentWeather){
        return (
            <section
            className="section current-weather"
            aria-label="current"
        >
            <div className="card card-lg current-weather-card">
                <h2 className="title-2 card-title">{title}</h2>
                <div className="weapper">
                    <p className="heading"> {`${currentWeather?.main.temp}`}&deg;<sup>c</sup> </p>
                    <img src={`./assets/images/weather_icons/${currentWeather?.weather[0]?.icon}.png`} width="64" height="64" alt={currentWeather?.weather[0]?.description} className="weather-icon" />
                </div>
                <p className="body-3">{currentWeather?.weather[0]?.description}</p>
                <ul className="meta-list">
                    <li className="meta-item">
                        <span className="m-icon">
                            calendar_today
                        </span>
                        <p className="title-3 meta-text">
                            {getDate(currentWeather?.dt, currentWeather?.timezone)}
                        </p>
                    </li>
                    <li className="meta-item">
                        <span className="m-icon">
                            location_on
                        </span>
                        <p className="title-3 meta-text">
                            {currentWeather?.name}{`, ${currentWeather?.sys?.country}`}
                        </p>
                    </li>
                </ul>
            </div>
        </section>
          )
    }else{
        return <LoadingSkeletonCard />
    }

}

export default NowCard