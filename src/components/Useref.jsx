import React, { useState } from 'react'
import { useRef } from 'react'

const Useref = () => {
    const userRef = useRef()
    const[user,setUser] = useState("");
  return (
    <div>
      <input type="text"  ref={userRef}/>
      <button onClick={()=>setUser(userRef.current.value)}>Click</button>
      <p>{userRef.current.value}</p>
      
    </div>
  )
}

export default Useref
