// import React, { useEffect, useState } from 'react'

// const UseEffect = () => {
// const[weather,setWeather] = useState("");

// const persons = ["Adithya","Balaji","srinadh"]

// useEffect(()=>{


//     async function search() {
//         const url = 'http://api.weatherapi.com/v1/current.json?key=ea1fd87f39da42c79eb55953242611&q=London&aqi=no'
//         const res = await fetch(url);
//         const data = await res.json();
//         console.log(data);
        
//         setWeather(
//             {
//                 location: data.location.name
//             }
//         )
//     }
//     search()

//     const names = ()=>{
//       persons.map()
//     }
// },[])
//   return (
//     <div>
//       <p>{weather.location}</p>
//     </div>
//   )
// }

// export default UseEffect

import React from 'react';

const UseEffect = () => {
  const itemsList = [
    { name: "Adithya", age: 21, job: "dev" },
    { name: "Balaji", age: 22, job: "designer" },
    { name: "Srinadh", age: 23, job: "tester" }
  ];

  return (
    <div>
      <ol>
        {itemsList.map((item, index) => (
          <li key={index}>
            Name: {item.name}, <br /> 
            Age: {item.age}, <br />
            Job: {item.job} <br />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default UseEffect;
