import React from 'react'
import { useState } from 'react'
const LoginFor = () => {
    const[user,setUser] = useState("");
    const[password,setPassword] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        onSubmit({user,password})

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <p>Username</p>
                <input type="text"  placeholder='username' onChange={(e)=>setUser(e.target.value)}/>

            </div>
            <div>
                <p>Password</p>
                <input type="text"  placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
            </div>
        </form>
      
    </div>
  )
}

export default LoginFor