import { useCallback, useEffect, useState } from "react";
import { Forecast } from "../utils/definitions";
import { urls } from "../utils/weatherUrls";

const useForecast = (coordinates:{lat:string, long:string}) =>{
    const {lat, long} = coordinates

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<any>()
    const [data, setData] = useState<null | Forecast>(null)

    const getForecast = useCallback(async()=>{
        try {
            setLoading(true)
            const data = await fetch(urls.fiveDayForecast(lat, long))

            if(data.ok){
                const forecast:Forecast = await data.json()
                setData(forecast)
            }else{
                throw new Error("Could not complete request for forecast")
            }
            
        } catch (error:any) {
            setError(error.message)
        }finally{
            setLoading(false)
        }
    },[lat, long]) 


    useEffect(()=>{
        getForecast()
    },[getForecast])
    
    return {loading, error, data}
}

export default useForecast