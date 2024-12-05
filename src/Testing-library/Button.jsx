import React from "react";

const Button = () => {
  const handleClick = () => {
    console.log("I got clicked once");
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Button;
