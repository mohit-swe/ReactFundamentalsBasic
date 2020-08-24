import React, { createContext } from "react";
import CompA from "./CompA";


const DirectFromB = React.createContext();

const SHOW_CONTEXT= ()=>{
    return( 
        <div>
        <DirectFromB.Provider value={"CHASE"}> <CompA/> </DirectFromB.Provider>
        
        </div>
        )
}

export default SHOW_CONTEXT
export {DirectFromB};