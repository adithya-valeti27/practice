import React from 'react'
import { useContext } from 'react'
import { Usercontext } from './Comp1'
const Comp4 = () => {
    const user = useContext(Usercontext)
  return (
    <div className='comp'>
        <h3>{`Bye ${user}`}</h3>
      Component 4
    </div>
  )
}

export default Comp4
