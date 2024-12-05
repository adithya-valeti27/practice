import React from 'react'
import Comp4 from './Comp4'
import { useContext } from 'react'
import { Usercontext } from './Comp1'



const Comp3 = () => {
    const user = useContext(Usercontext)
  return (
    <div className='comp'>
      Component 3
      <h5>{`Hey, ${user}`}</h5>
      <Comp4/>
    </div>
  )
}

export default Comp3
