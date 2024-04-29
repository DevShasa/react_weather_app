import { AirQuality } from "../utils/definitions";
import { aqiText } from "../utils/dateUtils";

type Props = {
	airQuality:AirQuality
};

const AirQualityMetric = (props: Props) => {
	const {airQuality} = props
	
	const {list} = airQuality
	const components = list[0]

	const airQualityExplaine = (index: keyof typeof aqiText)=>{
		return {level:aqiText[index].level, message:aqiText[index].message}
	}

	return (
		<div className="card card-sm highlight-card one">
			<h3 className="title-3"> Air Quality Index </h3>

			<div className="wrapper">
				<span className="m-icon">air</span>
				<ul className="card-list">
					<li className="card-item">
						<p className="title-1"> {String(components?.components?.pm2_5)} </p>
						<p className="label-1"> PM<sub>2.5</sub> </p>
					</li>
					<li className="card-item">
						<p className="title-1"> {String(components?.components?.o3)} </p>
						<p className="label-1"> O<sub>3</sub> </p>
					</li>
					<li className="card-item">
						<p className="title-1"> {String(components?.components?.no2)} </p>
						<p className="label-1"> NO<sub>2</sub> </p>
					</li>
					<li className="card-item">
						<p className="title-1"> {String(components?.components?.so2)} </p>
						<p className="label-1"> SO<sub>2</sub> </p>
					</li>
				</ul>
			</div>

			<span
				className={`badge aqi-${components?.main?.aqi} label-1`}
				title={ airQualityExplaine( components.main.aqi as keyof typeof aqiText ).message }
			>
				{ airQualityExplaine( components.main.aqi as keyof typeof aqiText ).level }
			</span>
		</div>
	);
};

export default AirQualityMetric;
