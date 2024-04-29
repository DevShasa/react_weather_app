import { useCallback, useEffect, useState } from "react";
import { AirQuality } from "../utils/definitions";
import { urls } from "../utils/weatherUrls";

const useAirQuality = (coordinates:{lat:string, long:string}) =>{
    const {lat, long} = coordinates

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<any>()
    const [data, setData] = useState<null | AirQuality>(null)

    const getAirQuality = useCallback(async()=>{
        try {
            setLoading(true)
            const data = await fetch(urls.airQuality(lat, long))

            if(data.ok){
                const airQuality:AirQuality = await data.json()
                setData(airQuality)
            }else{
                throw new Error("Could not complete air quality request")
            }
            
        } catch (error:any) {
            setError(error.message)
        }finally{
            setLoading(false)
        }
    },[lat, long]) 


    useEffect(()=>{
        getAirQuality()
    },[getAirQuality])
    
    return {loading, error, data}
}

export default useAirQuality