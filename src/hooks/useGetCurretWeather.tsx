import { useCallback, useEffect, useState } from "react";
import { Currentweather } from "../utils/definitions";
import { urls } from "../utils/weatherUrls";

const useCurrentWeather = (coordinates:{lat:string, long:string}) =>{
    const {lat, long} = coordinates

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<any>()
    const [data, setData] = useState<null | Currentweather>(null)

    const getCurrentWeather = useCallback(async()=>{
        try {
            setLoading(true)
            const data = await fetch(urls.currentWeather(lat, long))

            if(data.ok){
                const currentWeather:Currentweather = await data.json()
                setData(currentWeather)
            }else{
                throw new Error("Could not complete get weather request")
            }
            
        } catch (error:any) {
            setError(error.message)
        }finally{
            setLoading(false)
        }
    },[lat, long]) 


    useEffect(()=>{
        getCurrentWeather()
    },[getCurrentWeather])
    
    return {loading, error, data}
}

export default useCurrentWeather