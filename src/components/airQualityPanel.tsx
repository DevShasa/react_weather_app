import React from "react";

type Props = {

};

const AirQualityMetric = (props: Props) => {
	return (
		<div className="card card-sm highlight-card one">
		<h3 className="title-3"> Air Quality Index </h3>

		<div className="wrapper">
			<span className="m-icon">air</span>
			<ul className="card-list">
				<li className="card-item">
					<p className="title-1"> 23.3 </p>
					<p className="label-1"> PM<sub>2.5</sub> </p>
				</li>
				<li className="card-item">
					<p className="title-1"> 23.3 </p>
					<p className="label-1"> PM<sub>2.5</sub> </p>
				</li>
				<li className="card-item">
					<p className="title-1"> 23.3 </p>
					<p className="label-1"> PM<sub>2.5</sub> </p>
				</li>
				<li className="card-item">
					<p className="title-1"> 23.3 </p>
					<p className="label-1"> PM<sub>2.5</sub> </p>
				</li>
			</ul>
		</div>

		<span className="badge aqi-1 label-1" title="agi message" > Good </span>
	</div>
	);
};

export default AirQualityMetric;
