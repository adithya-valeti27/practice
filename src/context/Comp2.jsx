import React from "react";
import Comp3 from "./Comp3";
import { useContext } from "react";
import { Usercontext } from "./Comp1";

const Comp2 = () => {
  const user = useContext(Usercontext);
  return (
    <div className="comp">
      component 2<h4>{`Hey, ${user}  You are here`}</h4>
      <Comp3 />
    </div>
  );
};

export default Comp2;
