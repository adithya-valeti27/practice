import React from 'react'

const Button2 = () => {
    const handleClick = () =>{
        document.title = "Adithya"
    }
  return (
    <div>
        <button onClick={handleClick}>submit</button>
      
    </div>
  )
}

export default Button2
