import NowCard from "./features/NowCard";
import ForecastCard from "./features/ForecastCard";
import MainCard from "./features/MainCard";
import useCurrentWeather from "./hooks/useGetCurretWeather";
import useForecast from "./hooks/useGetForecast";
import useAirQuality from "./hooks/useGetAirQuality";
import LoadingSkeletonCard from "./components/loadingSkeletonCard";
import MainSkeletonCard from "./components/mainSkeletonContainer";
import { LocaleContext } from "./context/LocaleContext";
import { useContext } from "react";
import { Languages } from "./utils/languages";
import ErrorCard from "./components/errorCard";

function App() {

	const {loading:currentLoading, error:currentError, data:currentData} = useCurrentWeather({lat:"-1.286389",long:"36.817223"} ) // Nairobi
	const {loading:forecastLoading, error:forecastError, data:forecastData} = useForecast({lat:"-1.286389",long:"36.817223"})
	const {loading:qualityLoading,error:qualitError, data:qualityData} = useAirQuality({lat:"-1.286389",long:"36.817223"})

	const {locale, changeLocation} = useContext(LocaleContext)

	return (
		<>
			<main>
				<article className="container">
					<div className="content-left">
						<button onClick={changeLocation} className="toggleButton">
							Switch to {locale === "en" ?"Kiswahili" :"English"}
						</button>

						{currentLoading && !currentError
							? <LoadingSkeletonCard />
							: currentError
							? <ErrorCard />
							: <NowCard currentWeather={currentData} title={Languages[locale].currentTitle} />
						}						

						{forecastLoading && !forecastError
							? <LoadingSkeletonCard />
							: forecastError
							? <ErrorCard />
							:<ForecastCard forecast={forecastData} title={Languages[locale].forecast} />
						}

					</div>

					<div className="content-right">
						{qualityLoading && currentLoading ? (
							<MainSkeletonCard />
						) : currentData && qualityData ? (
							<MainCard
								currentWeather={currentData}
								airQuality={qualityData}
								higlight={Languages[locale].higlight}
								sun={Languages[locale].sun}
								humidity={Languages[locale].humidity}
								pressure={Languages[locale].pressure}
								visibility={Languages[locale].visibility}
								feel={Languages[locale].feel}
							/>
						) : (
							<MainSkeletonCard />
						)}
					</div>
				</article>
			</main>
		</>
	);
}

export default App;
