import React from "react";
import { useState } from "react";
import { createContext } from "react";
import Comp2 from "./Comp2";
export const Usercontext = createContext();
const Comp1 = () => {
  const [user, setUser] = useState("Adithya");
  return (
    <div className="comp">
      component 1
      <Usercontext.Provider value={user}>
        <Comp2 user={user} />
      </Usercontext.Provider>
    </div>
  );
};

export default Comp1;
