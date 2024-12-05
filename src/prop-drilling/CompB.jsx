import React from 'react'
import CompC from './CompC'

const CompB = (props) => {
    const myname = props.name;
  return (
    <div className='comp'>
        <h5>{`Hello, ${myname}`}</h5>
      Component B
      
      <CompC name={myname}/>
    </div>
  )
}

export default CompB
