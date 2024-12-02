import React, { useEffect, useState } from 'react'

const UseEffect = () => {
const[weather,setWeather] = useState("");

useEffect(()=>{


    async function search() {
        const url = 'http://api.weatherapi.com/v1/current.json?key=ea1fd87f39da42c79eb55953242611&q=London&aqi=no'
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        
        setWeather(
            {
                location: data.location.name
            }
        )
    }
    search()
},[])
  return (
    <div>
      <p>{weather.location}</p>
    </div>
  )
}

export default UseEffect
