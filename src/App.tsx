import NowCard from "./features/NowCard";
import ForecastCard from "./features/ForecastCard";
import MainCard from "./features/MainCard";
import useCurrentWeather from "./hooks/useGetCurretWeather";
import useForecast from "./hooks/useGetForecast";
import useAirQuality from "./hooks/useGetAirQuality";
import LoadingSkeletonCard from "./components/loadingSkeletonCard";
import MainSkeletonCard from "./components/mainSkeletonContainer";

function App() {

	const {loading:currentLoading, error:currentError, data:currentData} = useCurrentWeather({lat:"-1.286389",long:"36.817223"} ) // Nairobi
	const {loading:forecastLoading, error:forecastError, data:forecastData} = useForecast({lat:"-1.286389",long:"36.817223"})
	const {loading:qualityLoading,error:qualitError, data:qualityData} = useAirQuality({lat:"-1.286389",long:"36.817223"})


	return (
		<>
			<main>
				<article className="container">
					<div className="content-left">

						
						{currentLoading  ? <LoadingSkeletonCard/> : <NowCard currentWeather={currentData}/>}
						{forecastLoading ? <LoadingSkeletonCard/> : <ForecastCard forecast={forecastData}/>}
					</div>

					<div className="content-right">
						{qualityLoading && currentLoading 
							? <MainSkeletonCard />
							: currentData && qualityData
							? <MainCard currentWeather={currentData} airQuality={qualityData}/>
							: <MainSkeletonCard />
						}
					</div>
				</article>
			</main>
		</>
	);
}

export default App;
