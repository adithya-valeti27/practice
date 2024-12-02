import React from 'react'
import { useState } from 'react'
const Usestate = () => {
    const[count,setCount] = useState(0);
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={()=>setCount(count=>(count+1))}>+</button>
      <button onClick={()=>setCount(count=>count-1)}>-</button>
      <button onClick={()=>setCount(count=>(0))}>Reset</button>
    </div>
  )
}

export default Usestate
