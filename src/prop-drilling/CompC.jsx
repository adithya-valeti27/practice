import React from 'react'
import CompD from './CompD'

const CompC = (props) => {
  return (
    <div className='comp'>
        Component C
        <CompD name={props.name}/>
      
    </div>
  )
}

export default CompC
