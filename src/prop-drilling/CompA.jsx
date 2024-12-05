import React, { useState } from 'react'
import CompB from './CompB'
import { createContext } from 'react'

const CompA = () => {
    const[name,setName] = useState("adithya")

  return (
    <div>
      Component A
      <CompB name={name}/>
    </div>
  )
}

export default CompA
