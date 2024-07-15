import React, { useEffect, useState } from 'react'

export const WeatherApp = () => {

    const [data, setData] = useState([])


    useEffect(() => {
        
            const getWeatherCondition = async () => {
                try {
                const API = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m')

                const response = await API.json();

                setData([response])
            }catch (err) {
            console.log(err)
        }}

        getWeatherCondition()


    }, [])
console.log(data)
    return (
        <div className='container'>
            {data && data.map((item, index) => (
                <div key={index}>
                    <h2>{item.current.time.replace(/[a-zA-z]/g, '') } </h2>
                    <h1>Hyderabad</h1>

                    <div className='W-image'>
                        <h2>{item.current.temperature_2m} </h2>
                    </div>

                    <div className='W-condition'>
                        <h1>{item.current.wind_speed_10m
                        }Km/h </h1>
                        <h3>{item.latitude} </h3>
                        <h3>{item.
                    longitude} </h3>
                    </div>
                </div>
            ))}
        </div>
    )
}
